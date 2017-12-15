<?php
namespace app\index\controller;
use think\Controller;
class Base extends Controller
{
    public function _initialize()
    {
    	$this->right();
    	$cateres=db('cate')->order('id asc')->select();
        $tagres=db('tags')->order('id desc')->select();
    	$this->assign(array(
            'cateres'=>$cateres,
            'tagres'=>$tagres
        ));
    }

    public function right(){
    	$clickres=db('article')->order('click desc')->limit(8)->select();
    	$tjres=db('article')->where('state','=',1)->order('click desc')->limit(8)->select();
    	$this->assign(array(
    		'clickres'=>$clickres,
    		'tjres'=>$tjres
    	));
    }
}
