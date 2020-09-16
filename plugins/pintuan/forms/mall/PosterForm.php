<?php
/**
 * link: http://www.zjhejiang.com/
 * copyright: Copyright (c) 2018 禾匠商城
 * author: xay
 */

namespace app\plugins\pintuan\forms\mall;

use app\core\response\ApiCode;
use app\forms\common\CommonOptionP;
use app\models\Model;
use app\plugins\pintuan\forms\common\CommonOption;
use app\plugins\pintuan\models\PintuanOption;

class PosterForm extends Model
{
    public $form;

    public function rules()
    {
        return [
            [['form'], 'trim'],
        ];
    }

    public function getList()
    {
        $p = new CommonOptionP(new PintuanOption());
        $sign = \Yii::$app->plugin->getCurrentPlugin()->getName();
        $result = $p->poster(PintuanOption::CUSTOMIZEPOSTER, \Yii::$app->mall->id, CommonOption::getPosterDefault()[$sign]);

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '请求成功',
            'data' => [
                'detail' => $result,
            ]
        ];
    }

    public function save()
    {
        try {
            $p = new CommonOptionP(new PintuanOption());
            $res = $p->set(PintuanOption::CUSTOMIZEPOSTER, $this->form, \Yii::$app->mall->id);
            if (!$res) {
                throw new \Exception('保存失败');
            }
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '保存成功',
            ];
        } catch (\Exception $e) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $e->getMessage(),
            ];
        }
    }
}
