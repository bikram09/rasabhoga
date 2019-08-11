function onSignIn(googleuser) {
    var profile=googleuser.getBasicProfile();
    $(".g-signin2").css("display", "none");
    $("data").css("display", "block");
    $("#pic").attr("src", profile.getImageUrl());
    $("#email").text(profile.getEmail());
}