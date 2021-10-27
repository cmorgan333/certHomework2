function initListeners() {
    $(".bars").click(function (e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function (e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });
}

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    
}

$(document).ready(function() {
    initListeners();
});
