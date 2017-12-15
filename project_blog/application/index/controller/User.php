<?php
namespace app\index\controller;
use think\Controller;

class User extends Controller
{

    public function lst()
    {   
		header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');
        
        $username = input('username');
		$list = db('user')->where('username',$username)->select();
		$temp = json_encode($list);
        return $temp;
    }

    public function edit(){
        
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

        if(!input('user_id')){
            $a = array('flag'=>0);
            return json_encode($a);
        }

        $data=[
            'user_id'=>input('user_id'),
            'username'=>input('username'),
            'gender'=>input('gender'),
            'native_place'=>input('native_place'),
            'birth'=>input('birth'),
            'email'=>input('email'),
        ];
  
        $save=db('user')->update($data);
        if($save !== false){
            $a = array('flag'=>1);
            return json_encode($a);
        }else{
            $a = array('flag'=>0);
            return json_encode($a);
        } 
    }

	public function changepassword(){
        
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

        $username = input('username');
        $password = input('password');
        $user_id = \think\Db::name('user')->where('username',$username)->value('user_id');
        
        $data=[
            
            'password'=>md5($password),
        ];
        
        $save=db('user')->where('user_id',$user_id)->update($data);

        //$save = db('user')->where('user_id',$user_id)->update($data);
        //$save=db('user')->where('user_id',$user_id)->update($data);
        //$save=db('user')->where('user_id',$user_id)->setField('password', md5($password));
        //$save = \think\Db::name('user')->update($data);

        if($save){
            $a = array('flag'=>1);
            return json_encode($a);
        }
        else{
            $a = array('flag'=>0);
            return json_encode($a);
        }
    }
	
}
