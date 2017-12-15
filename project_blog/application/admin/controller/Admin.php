<?php
namespace app\admin\controller;
use think\Controller;
use app\admin\model\Admin as AdminModel;

class Admin extends Controller
{
    public function lst()
    {   
		header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');
		
		$list = db('admin')->select();
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
		];
		$validate = \think\Loader::validate('Admin');
		if(!$validate->scene('add')->check($data)){
			$a = array('flag'=>0);
			return json_encode($a);
		}
		if(db('admin')->insert($data)){
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

		$id=input('id');
    	$admins=db('admin')->find($id);

		$data=[
			'id'=>$id,
			'username'=>input('username'),
			'password'=>input('password'),
		];
	
		$validate = \think\Loader::validate('Admin');
		if(!$validate->scene('edit')->check($data)){
			$a = array('flag'=>0);
			return json_encode($a);
		}
		$save=db('admin')->update($data);
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
		
    	$id=input('id');
		if(db('admin')->where('id',$id)->delete()){
			$a = array('flag'=>1);
			return json_encode($a);
		}else{
			$a = array('flag'=>0);
			return json_encode($a);
		}
    }

    public function logout(){
        session(null);
        $this->success('退出成功！','Login/index');
    }
}
