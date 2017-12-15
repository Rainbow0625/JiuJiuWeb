<?php
namespace app\index\model;

use think\Model;
use think\Session;

class Login extends Model{
    
    public function login($username, $password){
        $users = \think\Db::name('user') -> where('username', '=', $username) -> find();
        if($users){
            if($users['password'] == md5($password)){
                \think\Session::set('user_id', $users['user_id']);//将用户登录的信息写入session
                \think\Session::set('username', $users['username']);
			     return 1;
            }else{
                return 2;
            }
        }else{
            return 0;
        }
    }
}