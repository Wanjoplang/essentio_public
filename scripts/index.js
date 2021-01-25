//------- FIREBASE VARIABLES ----------------//
var database = firebase.database();
var category_ref = database.ref("categories");
var topic_list = "";
localStorage.clear();

// ======== EVENTS ===================== //
category_ref.once("value",function(snap){
    $(".topic-list").empty();
    for(let i in snap.val()){
        $(".topic-list").append("<button class='topic' id='topic"+i+"'>"+snap.val()[i]["category-name"]+"</button>");
        $("#topic"+i).on("click",function(){
            $(this).toggleClass('highlight');
            if(topic_list.includes($(this).text())){
                topic_list = topic_list.replaceAll(","+$(this).text(),"");
            }
            else{
                topic_list += ","+$(this).text();
            }
        });
    }
});
$(".back").on("click",function(){
    window.history.back();
});
$(".next").on("click",function(){
    console.log(topic_list);
    localStorage.setItem("topic_list",topic_list);
    window.open("pages/qna.html","_self");
});

// ======== FUNCTIONS ================== //