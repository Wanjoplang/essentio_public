function init_events(){
    user = firebase.auth().currentUser;
    if(user !== null) $("small").text(user.displayName);
    else $("small").text("");
}

function print_page(){
    $("h5,p").hide();
    window.print();
    $("h5,p").show();
}

db = firebase.database();
ref = db.ref("roster");
ref.on("value",function(snap){
    console.log(snap.val());
    if(snap.val()!==null){
        $("#roster").empty();
        $("#roster").html(snap.val()["html"]);
        init_events();
    }
});

init_events();