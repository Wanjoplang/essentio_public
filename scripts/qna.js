//------- FIREBASE VARIABLES ----------------//
var database = firebase.database();
var qna_ref = database.ref("qna");
var qna_search_ref = database.ref("qna");

// ======== FUNCTIONS ================== //
load_questtion_and_options = function(index,question,option1,option2,option3,option4,category){
    // $(".logo-name").html(localStorage.getItem("topic_list"));
    let html = "<section class='question-section'>";
    html += "<h1>Question "+index+" <small style='font-weight:normal'>("+category+")</small></h1>";
    html += "<div id='preview' class='preview'>"+question+"</div>";
    html += "</section>";
    html += "<section class='answer-section'>";
    html += "<table class='options'>";
    html += "<tbody>";
    html += "<tr>";
    html += "<td width='10px'>(1)</td>";
    html += "<td>"+option1.split("|")[0]+"</td>";
    html += "<td width='100px' class='cb-check cb-check"+index+"' id='cb-check1"+index+"' data-checked='"+option1.split("|")[1]+"'>Check</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td width='10px'>(2)</td>";
    html += "<td>"+option2.split("|")[0]+"</td>";
    html += "<td width='100px' class='cb-check cb-check"+index+"' id='cb-check2"+index+"' data-checked='"+option2.split("|")[1]+"'>Check</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td width='10px'>(3)</td>";
    html += "<td>"+option3.split("|")[0]+"</td>";
    html += "<td width='100px' class='cb-check cb-check"+index+"' id='cb-check3"+index+"' data-checked='"+option3.split("|")[1]+"'>Check</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td width='10px'>(4)</td>";
    html += "<td>"+option4.split("|")[0]+"</td>";
    html += "<td width='100px' class='cb-check cb-check"+index+"' id='cb-check4"+index+"' data-checked='"+option4.split("|")[1]+"'>Check</td>";
    html += "</tr>";
    html += "</tbody>";
    html += "</table>";
    html += "</section>";

    $(".qna").append(html);

    $("#cb-check1"+index).on("click",function(e){
        $(".cb-check"+index).css({
            "background-color":"#607D8B",
            "color":"white",
            "text-align":"center",
            "cursor":"pointer",
        });
        $(".cb-check"+index).text("Check");
        if(e.currentTarget.dataset.checked === "true"){
            $("#cb-check1"+index).css({
                "background-color":"#4caf50",
                "color":"white",
                "text-align":"center",
                "cursor":"pointer",
            });
            $("#cb-check1"+index).html("<i class='fas fa-check-circle'></i> Correct");
        }
        else{
            $("#cb-check1"+index).css({
                "background-color":"red",
                "color":"white",
                "text-align":"center",
                "cursor":"pointer",
            });
            $("#cb-check1"+index).html("<i class='fas fa-times-circle'></i> Wrong");
        }
    });

    $("#cb-check2"+index).on("click",function(e){
        $(".cb-check"+index).css({
            "background-color":"#607D8B",
            "color":"white",
            "text-align":"center",
            "cursor":"pointer",
        });
        $(".cb-check"+index).text("Check");
        if(e.currentTarget.dataset.checked === "true"){
            $("#cb-check2"+index).css({
                "background-color":"#4caf50",
                "color":"white",
                "text-align":"center",
                "cursor":"pointer",
            });
            $("#cb-check2"+index).html("<i class='fas fa-check-circle'></i> Correct");
        }
        else{
            $("#cb-check2"+index).css({
                "background-color":"red",
                "color":"white",
                "text-align":"center",
                "cursor":"pointer",
            });
            $("#cb-check2"+index).html("<i class='fas fa-times-circle'></i> Wrong");
        }
    });

    $("#cb-check3"+index).on("click",function(e){
        $(".cb-check"+index).css({
            "background-color":"#607D8B",
            "color":"white",
            "text-align":"center",
            "cursor":"pointer",
        });
        $(".cb-check"+index).text("Check");
        if(e.currentTarget.dataset.checked === "true"){
            $("#cb-check3"+index).css({
                "background-color":"#4caf50",
                "color":"white",
                "text-align":"center",
                "cursor":"pointer",
            });
            $("#cb-check3"+index).html("<i class='fas fa-check-circle'></i> Correct");
        }
        else{
            $("#cb-check3"+index).css({
                "background-color":"red",
                "color":"white",
                "text-align":"center",
                "cursor":"pointer",
            });
            $("#cb-check3"+index).html("<i class='fas fa-times-circle'></i> Wrong");
        }
    });

    $("#cb-check4"+index).on("click",function(e){
        $(".cb-check"+index).css({
            "background-color":"#607D8B",
            "color":"white",
            "text-align":"center",
            "cursor":"pointer",
        });
        $(".cb-check"+index).text("Check");
        if(e.currentTarget.dataset.checked === "true"){
            $("#cb-check4"+index).css({
                "background-color":"#4caf50",
                "color":"white",
                "text-align":"center",
                "cursor":"pointer",
            });
            $("#cb-check4"+index).html("<i class='fas fa-check-circle'></i> Correct");
        }
        else{
            $("#cb-check4"+index).css({
                "background-color":"red",
                "color":"white",
                "text-align":"center",
                "cursor":"pointer",
            });
            $("#cb-check4"+index).html("<i class='fas fa-times-circle'></i> Wrong");
        }
    });
}

format_search_suggesstions = function(){
    $(".search-result").empty();
    qna_search_ref.once("value",function(snap){
        if(snap.val() === null){
            $(".search-result").html("<p>No Suggesstions Yet!!");
            $(".search-result").hide();
            return;
        }
        for(i in snap.val()){
            suggestion = snap.val()[i]["question_text"];
            suggestion_id = i;
            if(suggestion.includes($("#query").val().toLowerCase())){
                load_search_suggesstions(suggestion,suggestion_id);
            }
        }
    });
}

load_search_suggesstions = function(suggestion,suggestion_id){
    let html = "<p id='"+suggestion_id+"'>"+suggestion+"</p>";
    if(!$(".search-result").text().includes(suggestion)){
        $(".search-result").append(html);
    }
    $(".search-result").show();
    $("#"+suggestion_id).on("click",function(e){
        $("#query").val(e.currentTarget.innerText);
        $(".search-result").empty();
        $(".search-result").html("<p>No Suggesstions Yet!!");
        $(".search-result").hide();
    });
}

// ======== EVENTS ===================== //
qna_ref.once("value",function(snap){
    console.log(snap.val());
    let index = 1;
    $(".qna").empty();
    if(snap.val() === null){
        $(".qna").html("<h3  style='text-align:center; color:rgba(0, 0, 0, 0.582);font-weight:normal;'>No Questions...!!!</h3>");
    }
    let flag = 0;
    for(let i in snap.val()){
        let question = snap.val()[i]["question"];
        let option1 = snap.val()[i]["option1"];
        let option2 = snap.val()[i]["option2"];
        let option3 = snap.val()[i]["option3"];
        let option4 = snap.val()[i]["option4"];
        let category = snap.val()[i]["category"];
        if(localStorage.getItem("topic_list").includes(category)){
            load_questtion_and_options(index++,question,option1,option2,option3,option4, category);
            flag = 1;
        }
    }
    if(flag === 0){
        for(let i in snap.val()){
            let question = snap.val()[i]["question"];
            let option1 = snap.val()[i]["option1"];
            let option2 = snap.val()[i]["option2"];
            let option3 = snap.val()[i]["option3"];
            let option4 = snap.val()[i]["option4"];
            let category = snap.val()[i]["category"];       
            load_questtion_and_options(index++,question,option1,option2,option3,option4, category);
        }        
    }
});
$("#query").on("keydown",function(){
    format_search_suggesstions();
});
$("#query").on("keypress",function(){
    format_search_suggesstions();
});
$("#query").on("focus",function(){
    format_search_suggesstions();
});
$("header").on("click",function(){
    if($("#query").val() === "" || $.trim($(".search-result").text()) === "No Suggesstions Yet!!"){
        $(".search-result").empty();
        $(".search-result").html("<p>No Suggesstions Yet!!");
        $(".search-result").hide();
    }
    else{
        $(".search-result").show();
    }
});
$("main").on("click",function(){
    if($("#query").val() === "" || $.trim($(".search-result").text()) === "No Suggesstions Yet!!"){
        $(".search-result").empty();
        $(".search-result").html("<p>No Suggesstions Yet!!");
        $(".search-result").hide();
    }
    else{
        $(".search-result").show();
    }
});
$(".search-icon").on("click",function(){
    $(".search-result").empty();
    $(".search-result").html("<p>No Suggesstions Yet!!");
    $(".search-result").hide();
    let query = $.trim($("#query").val()).toLowerCase();
    qna_ref.orderByChild("question_text").startAt(query).endAt(query+"\uf8ff").once("value",function(snap){
        console.log(snap.val());
        let index = 1;
        $(".qna").empty();
        if(snap.val() === null){
            $(".qna").html("<h3 style='text-align:center; color:rgba(0, 0, 0, 0.582);font-weight:normal;'>No Questions...!!!</h3>");
        }
        for(let i in snap.val()){
            let question = snap.val()[i]["question"];
            let option1 = snap.val()[i]["option1"];
            let option2 = snap.val()[i]["option2"];
            let option3 = snap.val()[i]["option3"];
            let option4 = snap.val()[i]["option4"];
            let category = snap.val()[i]["category"];       
            load_questtion_and_options(index++,question,option1,option2,option3,option4, category);
        }
    });
});
$("#back").on("click",function(){
    window.history.back();
});