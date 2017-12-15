<?php
namespace app\index\validate;

use think\Validate;

class Register extends Validate
{
    protected $rule = [
        'username' => 'require|max:10',
		'password' => 'require',
    ];

    protected $message  =   [
        'username.require' => '用户名不能为空',
		'username.max' => '用户名长度不能超过10位',
        'password.require' => '密码不能为空',
    ];
}