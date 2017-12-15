<?php
namespace app\Admin\controller;
use think\Controller;
use app\admin\model\Admin;
class Login extends Controller
{
    public function index()
    {
        
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');
        
        $admin=new Admin();
        $num=$admin->login(input('username'), input('password'));

        if($num==3){
            $a = array('flag'=>1);
            return json_encode($a);
        }
        elseif($num == 2){
            $a = array('flag'=>2);
            return json_encode($a);
        }
        else{
            $a = array('flag'=>0);
            return json_encode($a);
        }
    }
}
