<?php
/**
 * link: http://www.zjhejiang.com/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: xay
 */

namespace app\forms\common;

use app\models\Coupon;
use app\models\UserCoupon;
use app\models\UserCouponAuto;
use app\models\CouponMallRelation;
use app\models\CouponAutoSend;
use app\models\User;

class CommonCoupon
{
    const TYPE_MALL = 0; ///平台发放
    const TYPE_AUTO = 1; //自动发放
    const TYPE_HOME = 2; //领劵中心
    const TYPE_INTEGRAL = 3; //积分商城
    const TYPE_POND = 4; //九宫格
    const TYPE_SCRATCH = 5; //刮刮卡

    /**
     * 优惠券领取数量
     * @param  int $id 优惠券Id
     * @return [type] [description]
     */
    public static function getCount(int $id)
    {
        return UserCoupon::find()->alias('u')->innerJoinWith('auto')->where(['u.coupon_id' => $id, 'u.is_delete' => 0])->count();
    }

    /**
     * 给用户发放优惠券
     * @param integer $user_id 用户id
     * @param integer $coupon_id 优惠券id
     * @param integer $coupon_auto_send_id 自动发放id
     * @param integer $type 领券类型
     * @return boolean
     */
    public static function userAddCoupon($user_id, $coupon_id, $type, $type_id = 0)
    {
        $user = User::findOne($user_id);
        if (!$user) {
            return false;
        }
        $coupon = Coupon::findOne([
            'id' => $coupon_id,
            'is_delete' => 0,
        ]);

        if (!$coupon) {
            return false;
        }

        if ($coupon->total_count == 0) {
            return false;
        }

        if ($type == CommonCoupon::TYPE_HOME) {
            // $res = UserCoupon::find()->where(['is_delete' => 0,'type' => 2,'user_id' => $user_id,'coupon_id' => $coupon_id])->exists();
            // if ($res) {
            //     return false;
            // }
        }

        if ($type == CommonCoupon::TYPE_AUTO) {
            $auto_send = CouponAutoSend::findOne([
                'id' => $type_id,
                'is_delete' => 0,
            ]);


            if (!$auto_send) {
                return false;
            }

            if ($auto_send->send_count != 0) {
                $send_count = UserCoupon::find()->innerJoinWith('auto')->where(['user_id' => $user->id])->count();
                if ($send_count && $send_count >= $auto_send->send_count) {
                    return false;
                }
            }
        };

        $t = \Yii::$app->db->beginTransaction();
        $user_coupon = new UserCoupon();
        // $user_coupon->type = $type;
        // $user_coupon->type_id = $type_id;
        $user_coupon->receive_type = (string)$type;
        $user_coupon->coupon_data = json_encode(\yii\helpers\ArrayHelper::toArray($coupon));
        $user_coupon->mall_id = $user->mall_id;//TODO
        $user_coupon->user_id = $user->id;
        $user_coupon->coupon_id = $coupon->id;
        $user_coupon->coupon_min_price = $coupon->min_price;


        if ($coupon->expire_type == 1) {
            $user_coupon->start_time = date('Y-m-d H:i:s');
            $user_coupon->end_time = date('Y-m-d H:i:s', strtotime("+{$coupon->expire_type}day"));
        } elseif ($coupon->expire_type == 2) {
            $user_coupon->start_time = $coupon->begin_time;
            $user_coupon->end_time = $coupon->end_time;
        }
        $user_coupon->is_use = 0;
        $user_coupon->is_delete = 0;
        $user_coupon->save();


        if ($type == CommonCoupon::TYPE_MALL) {
            $form = new CouponMallRelation();
            $form->mall_id = $user->mall_id;
            $form->user_coupon_id = $user_coupon->id;
            if (!$form->save()) {
                $t->rollBack();
                return $this->getErrorResponse($form);
            }
        }

        if ($type == CommonCoupon::TYPE_AUTO) {
            $form = new UserCouponAuto();
            $form->user_coupon_id = $user_coupon->id;
            $form->auto_coupon_id = $type_id;
            if (!$form->save()) {
                $t->rollBack();
                return $this->getErrorResponse($form);
            }
        }
        $t->commit();
        return $user_coupon;
    }
}
