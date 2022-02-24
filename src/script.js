var counter = 100;
$(document).ready(function () {
    console.log("Working..");

    $('#addbtn').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: "config.php",
            method: "post",
            data: {
                id: Math.random() * 1000,
                txt: $('#new_task').val(),
                action: "add",
                status: 0,
                dataType: 'JSON'
            },
            success: function (responce) {
                data = $.parseJSON(responce);
                console.log(data);

                // console.log(vall);


                DyData(data);


            }



        });


    });

    $(".check").change(function() {
        alert();
        if(this.checked) {
            //I am checked
            console.log("I am checked");
        }else{
            console.log("I am not checked");
            
        }
    });
});

$(document).on('click', '.delete', function (e) {
    e.preventDefault();
    var id = $(".delete").val();

    $.ajax({
        url: "config.php",
        method: 'POST',
        data: {
            action: 'del',
            id: id
        },
        success: function (response) {
            data = $.parseJSON(response);
            DyData(data);

        }
    });
});

function DyData(data) {
    var html = "";
    var cmp="";
    for (var i = 0; i < data.data.length; i++) {
        console.log(data.data[i].id);
        if(data.data[i].status==0){
        html += '<form method="post" action=""><li>\
        \
        <input type="checkbox" onclick="changeCheck('+data.data[i].id+')"><label>'+ data.data[i].text + '</label>\
        <input type="text">\
        <button class="edit" id="edii" value="'+ data.data[i].text + '" >Edit</button>\
        <button class="delete" id="dele" value="'+ data.data[i].id + '" >Delete</button>\
        \
        </li></form>';
    }
    else{
        cmp += '<form method="post" action=""><li>\
        \
        <input type="checkbox" onclick="changeCheck('+data.data[i].id+')"><label>'+ data.data[i].text + '</label>\
        <input type="text">\
        <button class="edit" id="edii" value="'+ data.data[i].text + '" >Edit</button>\
        <button class="delete" id="dele" value="'+ data.data[i].id + '" >Delete</button>\
        \
        </li></form>';
    }

    }
    $('#incomplete_tasks').html(html);
    $('.tsk_cmp').html(cmp);


}

var new_id = "";

$(document).on('click', '.edit', function (e) {
    e.preventDefault();

    var idd = $(this).val();
    // $("#edii").val());

    new_id = idd;
    $('#new_task').val(idd);
    $('#updatebtn').css('display', 'inline-block');

    // $.ajax({
    //     type: "post",
    //     url: "config.php",
    //     data: {
    //         id: idd,
    //         action: 'edit'
    //     },
    //     dataType: "dataType",
    //     success: function (response) {

    //     }
    // });
});
// function fun(id){
//     console.log('onclick'+id);

// }


$('#updatebtn').click(function (e) {
    e.preventDefault();
    var vall = $('#new_task').val();
    console.log(vall);
    console.log(new_id);
    $.ajax({
        "type": "post",
        "url": "config.php",
        "data": {
            "textid": new_id,
            "new_text": vall,
            "action": 'update'
        },
        "dataType": "JSON",
        success: function (response) {
           
            // data = $.parseJSON(response);
            DyData(response);
            

        }
    });
    // alert("Value Updated! Refresh the page");
});

function changeCheck(ide){
   

    $.ajax({
        url: "config.php",
        method: "post",
        data: {
            "id": ide,
            "action": "status",
            "dataType": 'JSON'
        },
        success: function (responce) {
            // data = $.parseJSON(responce);
            console.log(responce);
            data = $.parseJSON(responce);
            DyData(data);

        }



    });

    // });
}


