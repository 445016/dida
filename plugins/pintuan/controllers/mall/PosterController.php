<?php
/**
 * link: http://www.zjhejiang.com/
 * copyright: Copyright (c) 2018 禾匠商城
 * author: xay
 */

namespace app\plugins\pintuan\controllers\mall;

use app\plugins\Controller;
use app\plugins\pintuan\forms\mall\PosterForm;

class PosterController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            $form = new PosterForm();
            $form->attributes = \Yii::$app->request->get();
            return $this->asJson($form->getList());
        } else {
            return $this->render('index');
        }
    }

    public function actionSave()
    {
        if (\Yii::$app->request->isPost) {
            $form = new PosterForm();
            $form->attributes = \Yii::$app->request->post();
            return $form->save();
        }
    }
}
