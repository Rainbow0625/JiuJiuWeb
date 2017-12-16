<?php
namespace app\index\controller;
use think\Controller;
class Cate extends Controller
{
    public function lst()
    {

		header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

    	//$catename=input('catename');
    	//查询当前栏目名称
    	//$cate=db('cate')->where('catename', $catename)->select();
    	//查询当前栏目下的文章
		//var_dump($cate);
		
		$cateid = input('id');
		$articleres=db('article')->where('cateid', $cateid)->select();
		
        $temp = json_encode($articleres);
        return $temp;    
    }
}
