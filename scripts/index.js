// ======== FUNCTIONS ================== //
load_questtion_and_options = function(index,question,option1,option2,option3,option4){
    let html = "<section class='question-section'>";
    html += "<h1>Question "+index+"</h1>";
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

//------- FIREBASE ----------------//

var database = firebase.database();
var qna_ref = database.ref("qna");

qna_ref.on("value",function(snap){
    console.log(snap.val());
    let index = 1;
    $(".qna").empty();
    if(snap.val() === null){
        $(".qna").html("<h3  style='text-align:center; color:rgba(0, 0, 0, 0.582);font-weight:normal;'>No Questions...!!!</h3>");
    }
    for(let i in snap.val()){
        let question = snap.val()[i]["question"];
        let option1 = snap.val()[i]["option1"];
        let option2 = snap.val()[i]["option2"];
        let option3 = snap.val()[i]["option3"];
        let option4 = snap.val()[i]["option4"];
        load_questtion_and_options(index++,question,option1,option2,option3,option4);
    }
});