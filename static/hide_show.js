$(document).ready(function() {
    $("#about").click(function() {
        $("#indexsec").hide();
        $("#aboutsec").show();
    });
    $("#coding").click(function() {
        $("#indexsec").hide();
        $("#codingsec").show();
    });
    $("#socials").click(function() {
        $("#indexsec").hide();
        $("#socialssec").show();
    });
    $("#projects").click(function() {
        $("#indexsec").hide();
        $("#projectssec").show();
    });
    $("#backtoindex, #backtoindex1, #backtoindex2, #backtoindex3").click(function() {
        $("#aboutsec").hide();
        $("#codingsec").hide();
        $("#socialssec").hide();
        $("#projectssec").hide()
        $("#indexsec").show();
    });
});