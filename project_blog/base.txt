<?php
namespace app\index\controller;
use think\Controller;
class Base extends Controller
{
    public function right_click(){

        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

    	$clicks=db('article')->order('click desc')->limit(8)->select();
    	$a = array('click'=>$clicks);
        return json_encode($a);
    	
    }

    public function right_recommand(){

        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

        $recommands=db('article')->where('state','=',1)->order('click desc')->limit(8)->select();

        $a = array('recommand'=>$recommands);
        return json_encode($a);
    }
}
