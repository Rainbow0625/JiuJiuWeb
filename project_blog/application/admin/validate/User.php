<?php
namespace app\admin\validate;
use think\Validate;
class User extends Validate
{
    protected $rule = [
        'username'  =>  'require|max:25|unique:user',
    ];

    protected $message  =   [
        'username.require' => '栏目名称必须填写',
        'username.max' => '栏目名称长度不得大于25位',
        'username.unique' => '栏目名称不得重复',

    ];

    protected $scene = [
        'add'  =>  ['username'=>'require|unique:user'],
        'edit'  =>  ['username'=>'require|unique:user'],
    ];

}
