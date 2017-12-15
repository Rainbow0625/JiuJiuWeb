<?php
namespace app\index\validate;

use think\Validate;

class Comment extends Validate
{
    protected $rule = [
        'content' => 'require|max:100',
    ];

    protected $message  =   [
        'content.require' => '评论不能为空',
        'content.max' => '评论长度不能超过100位',
    ];

}