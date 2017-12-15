<?php
namespace app\admin\controller;
use think\Controller;
use app\admin\model\Admin as AdminModel;

class User extends Controller
{
    public function lst()
    {
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

        $list = db('user')->select();
        $temp = json_encode($list);
         return $temp;
    }

    public function add()
    {   

        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

        $data=[
            'username'=>input('username'),
            'password'=>md5(input('password')),
            'gender'=>input('gender'),
            'native_place'=>input('native_place'),
            'birth'=>input('birth'),
            'email'=>input('email'),

        ];
        $validate = \think\Loader::validate('User');
        if(!$validate->scene('add')->check($data)){
           $a = array('flag'=>0);
            return json_encode($a);
        }
        if(db('user')->insert($data)){
            $a = array('flag'=>1);
            return json_encode($a);
        }else{
            $a = array('flag'=>0);
            return json_encode($a);
        }
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
            'password'=>input('password'),
            'gender'=>input('gender'),
            'native_place'=>input('native_place'),
            'birth'=>input('birth'),
            'email'=>input('email'),
        ];
        $validate = \think\Loader::validate('user');
        if(!$validate->scene('edit')->check($data)){
            $a = array('flag'=>0);
            return json_encode($a);
        }
        $save=db('user')->update($data);
        if($save !== false){
            $a = array('flag'=>1);
            return json_encode($a);
        }else{
            $a = array('flag'=>0);
            return json_encode($a);
        } 
    }

    public function del(){

        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

        $id=input('user_id');
        
        if(db('user')->where('user_id',$id)->delete()){
            $a = array('flag'=>1);
            return json_encode($a);
        }
        else
        {
            $a = array('flag'=>0);
            return json_encode($a);
        }
    }
}
