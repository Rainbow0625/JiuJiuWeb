<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\Login as Log;//引入命名空间

class Login extends Controller
{
    public function index()
    {
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

       
            $login = new Log;
            $status = $login->login(input('username'), input('password'));

			$test = input('username');
            
			if($status == 1){
                $a = array('flag'=>1);
                return json_encode($a);
            }
            elseif($status == 2){
                $b = array('flag'=>2);
                return json_encode($b);
            }else{
                $c = array('flag'=>$test);
                return json_encode($c);
            }
        
		$d = array('flag'=>9);
        return json_encode($d);
        
    }
    
    public function logout(){
        session(null);//清空session
        return $this->success('退出成功', url('index'));
    }
}
