<?php 
function display($arr){
    $html="";
    foreach($arr as $key => $val){
        $html+='<!-- <li><input type="checkbox"><label>Pay Bills</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>';
    }
}


?>