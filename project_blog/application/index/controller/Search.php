<?php
namespace app\index\controller;
use think\Controller;
class Search extends Controller
{
    public function index()
    {
        $keywords=input('keywords');
        if(!input('keywords')){
            $keywords = "暂无数据！";
        }
        
        if($keywords){
            $map['title']=['like','%'.$keywords.'%'];
            $searchres=db('article')->where($map)->order('id desc')->paginate($listRows = 3, $simple = false, $config = [
                'query'=>array('keywords'=>$keywords),
                ]);
            $this->assign(array(
                'searchres'=>$searchres,
                'keywords'=>$keywords
                ));
        }else{
           
        }

        return $this->fetch('search');
    }

}
