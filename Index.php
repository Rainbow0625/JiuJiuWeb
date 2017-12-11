<?php
namespace app\index\controller;
use think\Controller;

class Index extends Controller
{
    public function index()
    {
		header('Access-Control-Allow-Origin: http://localhost:4200');
		header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
		header('Access-Control-Allow-Methods: GET, POST, PUT');
		header('Access-Control-Allow-Credentials: true');
		
		
	
		$test = input("username");
        //$test = input('post.users/a');
		//$temp = json_decode($test);
	
        if($test){
			
			$a = array('a'=>1);
			
			return json_encode($a);
        }
        else{
            $a = array('a'=>2);
			
			return json_encode($a);
        }
    }
}
