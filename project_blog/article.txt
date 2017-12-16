<?php
namespace app\index\controller;
use think\Controller;
class Article extends Controller
{
    public function lst(){

        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        header('Access-Control-Allow-Methods: GET, POST, PUT');
        header('Access-Control-Allow-Credentials: true');

        $article_id = input('article_id');
        $article=db('article')->find($article_id);
        return json_encode($article);
    }
}
