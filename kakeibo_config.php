<?php

// データベース名
define('_DB_NAME', 'private');
// MySQL のユーザー名
define('_DB_USER', 'testuser');
// MySQL のパスワード
define('_DB_PASS', 'password');
// MySQL のホスト名 (ほとんどの場合変更する必要はありません。)
define('_DB_HOST', 'localhost');


/** データベーステーブルのキャラクターセット (ほとんどの場合変更する必要はありません。) */
define('_DB_CHARSET', 'utf8');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません。) */
define('_DB_COLLATE', '');

define('_DSN', 'mysql:dbname='._DB_NAME.'; host='._DB_HOST.'; charset='._DB_CHARSET);


define("_MEMBER_SESSNAME", "PHPSESSION_MEMBER");
define("_MEMBER_AUTHINFO", "userinfo");


//require_once 'SessionCtrl.php';
//require_once (__DIR__."/../smarty-3.1.33/libs/Smarty.class.php");
//require_once ("SmartyPrivate.php");
