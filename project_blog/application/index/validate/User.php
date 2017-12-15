<?php
namespace app\index\validate;

use think\Validate;

class User extends Validate
{
    protected $rule = [
        'username' => 'require|max:10',
		
    ];

    protected $message  =   [
        'username.require' => '用户名不能为空',
		'username.max' => '用户名长度不能超过10位',
        
    ];
}