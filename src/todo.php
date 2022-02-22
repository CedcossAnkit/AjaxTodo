<?php


// $action=$_POST['action'];
// switch($action){
//     case 'add':

// }

?>

<html>
    <head>
        <title>TODO List</title>
        <link href="style.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <h2>TODO LIST</h2>
            <h3>Add Item</h3>
            <p>
                <input id="new_task" type="text">
                <input type="submit" value="add" name="action" id="addbtn">
            </p>
    
            <h3>Todo</h3>
            <ul id="incomplete_tasks">
                <!-- <li><input type="checkbox"><label>Pay Bills</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>
                <li><input type="checkbox"><label>Go Shopping</label><input type="text" value="Go Shopping"><button class="edit">Edit</button><button class="delete">Delete</button></li> -->
            </ul>
    
            <h3>Completed</h3>
            <ul id="completed-tasks">
                <!-- <li><input type="checkbox" checked><label>See the Doctor</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li> -->
                
            </ul>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script  src="script.js"></script>
    </body>
</html>