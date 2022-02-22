var counter = 100;
$(document).ready(function () {
    console.log("Working..");
    
    $('#addbtn').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: "config.php",
            method: "post",
            data: {
                id: Math.random()*1000,
                txt: $('#new_task').val(),
                action: "add",
                status: 0,
                dataType: 'JSON'
            },
            success: function (responce) {
             data=$.parseJSON(responce);
             console.log(data);

             // console.log(vall);
               function DyData(data){
                 var html="";  
                for(var i=0;i<data.data.length;i++){
                    console.log(data.data[i].id);
                     html+='<form method="post" action=""><li>\
                     \
                     <input type="checkbox"><label>'+data.data[i].text+'</label>\
                     <input type="text">\
                     <button class="edit">Edit</button>\
                     <button class="delete" >Delete</button>\
                     \
                     </li></form>';

                }
                $('#incomplete_tasks').html(html);
            
                
               }

            DyData(data);


            }
            


        });
        counter++;

    });
});

$("button .delete").click(function (e) { 
    e.preventDefault();
    alert()
    
});