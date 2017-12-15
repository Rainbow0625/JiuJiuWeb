<?php
namespace app\index\controller;
use think\Controller;

class Register extends Controller
{
    public function add()
    {
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

        if(request()->isPost()){
            

                $data=[
                
                'username'=>input('username'),
                'password'=>md5(input('password')),
                
                'gender'=>input('gender'),
                'native_place'=>input('native_place'),
                'birth'=>input('birth'),
                'email'=>input('email'),
                
                ];

/*
                //判断用户是否长传了图片
                //multipart/form-data的表单格式才能上传文件
                //执行文件上传操作
                if($_FILES['head_pic']['tmp_name']){
                    $file = request()->file('head_pic');
                    $info = $file->move(ROOT_PATH.'public'.DS.'/static/uploads');
                    if($info){
                        //获取文件相关信息用以存入数据库
                        $data['head_pic']='/static/uploads/'.date('Ymd').'/'.$info->getFilename();
                    }
                    else{
                       $a = array('flag'=>2);
                        return json_encode($a);
                    }
                }
*/
                
                    
                    $db = \think\Db::name('user')->insert($data);
                    
                    if($db){
                        $a = array('flag'=>1);
                        return json_encode($a);//第二个参数为要跳转到的方法
                    }
                    else{
                        $a = array('flag'=>0);
                        return json_encode($a);
                    }
                

                
           
            
        }

        // $user = db('user')->select();
        // $this->assign('user', $user);

        $a = array('flag'=>1);
        return json_encode($a);
    }

    public function index()
    {
        $a = array('flag'=>1);
        return json_encode($a);
    }

}