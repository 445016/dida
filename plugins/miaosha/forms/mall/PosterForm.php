<?php
/**
 * link: http://www.zjhejiang.com/
 * copyright: Copyright (c) 2018 禾匠商城
 * author: xay
 */

namespace app\plugins\miaosha\forms\mall;

use app\core\response\ApiCode;
use app\forms\common\CommonOptionP;
use app\models\Model;
use app\plugins\miaosha\forms\common\CommonOption;
use app\plugins\miaosha\models\MiaoshaOption;

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
        $p = new CommonOptionP(new MiaoshaOption());
        $sign = \Yii::$app->plugin->getCurrentPlugin()->getName();
        $result = $p->poster(MiaoshaOption::CUSTOMIZEPOSTER, \Yii::$app->mall->id, CommonOption::getPosterDefault()[$sign]);

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
            $p = new CommonOptionP(new MiaoshaOption());
            $res = $p->set(MiaoshaOption::CUSTOMIZEPOSTER, $this->form, \Yii::$app->mall->id);
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
