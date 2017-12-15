<?php
namespace app\admin\controller;
use think\Controller;
use app\admin\model\Admin as AdminModel;

class Article extends Controller
{
    public function lst()
    {

		header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

    	$list = db('article')->select();
        $temp = json_encode($list);
        return $temp;
    }

    public function add()
    {	

        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');


        if(!input('title')){
            $a = array('flag'=>0);
            return json_encode($a);
        }

        $data=[
            'title'=>input('title'),
            'author'=>input('author'),
            'desc'=>input('desc'),
            'keywords'=>str_replace('，', ',', input('keywords')),
            'content'=>input('content'),
            'cateid'=>input('cateid'),
            'time'=>time(),
            'state'=>input('state'),
        ];

        /*
        if($_FILES['pic']['tmp_name']){
            $file = request()->file('pic');
            $info = $file->move(ROOT_PATH . 'public' . DS . 'static/uploads');
            $data['pic']='/uploads/'.$info->getSaveName();
        }
        */

        if(db('Article')->insert($data)){
            $a = array('flag'=>1);
            return json_encode($a);
        }else{
            $a = array('flag'=>0);
            return json_encode($a);
        }

    }
/*
    public function edit(){
    	$id=input('id');
    	$articles=db('Article')->find($id);
    	if(request()->isPost()){
    		$data=[
    			'id'=>input('id'),
                'title'=>input('title'),
                'author'=>input('author'),
                'desc'=>input('desc'),
                'keywords'=>str_replace('，', ',', input('keywords')),
                'content'=>input('content'),
                'cateid'=>input('cateid'),
    		];
            if(input('state')=='on'){
                $data['state']=1;
            }else{
                $data['state']=0;
            }
            if($_FILES['pic']['tmp_name']){
                
                $file = request()->file('pic');
                $info = $file->move(ROOT_PATH . 'public' . DS . 'static/uploads');
                $data['pic']='/uploads/'.$info->getSaveName();
            }
			$validate = \think\Loader::validate('Article');
    		if(!$validate->scene('edit')->check($data)){
			   $this->error($validate->getError()); die;
			}
    		if(db('Article')->update($data)){
    			$this->success('修改文章成功！','lst');
    		}else{
    			$this->error('修改文章失败！');
    		}
    		return;
    	}
    	$this->assign('articles',$articles);
        $cateres=db('cate')->select();
        $this->assign('cateres',$cateres);
    	return $this->fetch();
    }
*/
    public function del(){

        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

    	$id=input('id');
		if(db('article')->where('id',$id)->delete()){
			$a = array('flag'=>1);
                return json_encode($a);
		}else{
			$a = array('flag'=>0);
                return json_encode($a);
		}
    }
}
