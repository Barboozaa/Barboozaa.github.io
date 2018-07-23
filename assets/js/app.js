$(document).ready(function() {
    $(".projects").hide();
    $(".contactMe").hide();
    var projectsHidden = true;
    var contactMeHidden = true;

    $("#projectLink").click(function() {
        if (projectsHidden == true) {
            projectsHidden = false
            $(".projects").show();
        } else return false
    });

    $("#contact").click(function() {
        if (contactMeHidden == true) {
            contactMeHidden = false
            $(".contactMe").show();
        } else return false
    })
});