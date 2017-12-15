<?php
namespace app\admin\controller;
use app\admin\model\Cate as CateModel;
use think\Controller;

class Cate extends Controller
{
    public function lst()
    {
		header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
		header('Access-Control-Allow-Credentials: true');
		
		$list = db('cate')->select();
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
			'catename'=>input('catename'),
			'desc'=>input('desc'),
		];
		$validate = \think\Loader::validate('Cate');
		if(!$validate->scene('add')->check($data)){
			$a = array('flag'=>0);
			return json_encode($a);
		}
		if(db('cate')->insert($data)){
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
    	$cates=db('cate')->find($id);
    	
		$data=[
			'id'=>input('id'),
			'catename'=>input('catename'),
			'desc'=>input('desc'),
		];
		$validate = \think\Loader::validate('cate');
		if(!$validate->scene('edit')->check($data)){
			$a = array('flag'=>0);
			return json_encode($a);
		}
		$save=db('cate')->update($data);
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
    	
		if(db('cate')->where('id',$id)->delete()){
			$a = array('flag'=>1);
			return json_encode($a);
		}else{
			$a = array('flag'=>0);
			return json_encode($a);
		}
    	
    }
}
