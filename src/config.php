<?php
session_start();
$act = $_REQUEST['action'];

switch ($act) {
    case 'add':
        add();
        break;
    case 'del':
        delete();
        break;
    default:
        echo "deafult rum";

}


function add()
{

    $tempSession = isset($_SESSION['tempSession']) ? $_SESSION['tempSession'] : array();
    // $tempSession=isset($_SESSION['tempSession'])?$_SESSION['tempSession']:array();
    // function addvalue(){


    $id = $_POST['id'];
    $dt = $_POST['txt'];
    $status = $_POST['status'];
    $action = $_POST['action'];


    $tempArr = array("id" => $id, 'text' => $dt, 'status' => $status, 'action' => $action);
    // echo "$id\n$text\n$status";

    // array_push($tempSession,$tempArr);
    // $_SESSION[$id]=$tempArr;
    array_push($tempSession, $tempArr);
    $_SESSION['tempSession'] = $tempSession;
    // print_r($_SESSION['101']);
    // 
    // print_r($tempArr);

    echo json_encode(array('data' => $_SESSION['tempSession']));
}
function delete(){

$idd= $_POST['id'];
    foreach($_SESSION['tempSession'] as $key=>$val){
        if($val['id']==$idd){
            array_splice($_SESSION['tempSession'],$key,1);
        }
    }
    echo json_encode(array('data' => $_SESSION['tempSession']));


}


// }
