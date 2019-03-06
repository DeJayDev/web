//I'm so sorry any of this has to be done the way it was. 

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },
});

function showDiscord() {
    var infoDiv = $(document.getElementsByClassName("infoDiv")[0]);
    infoDiv.animateCss('tada')
    infoDiv.html('DeJay#1337')
}

function showTwitter() {
    var infoDiv = $(document.getElementsByClassName("infoDiv")[0]);
    infoDiv.animateCss('tada')
    infoDiv.html('<a href="https://twitter.com/DeJayDev">@DeJayDev</a>')
}

function showBlog() {
    var infoDiv = $(document.getElementsByClassName("infoDiv")[0]);
    infoDiv.animateCss('rubberBand')
    infoDiv.html('<a href="https://blog.dejaydev.com">Blog!</a>')
}

function showGit() {
    var infoDiv = $(document.getElementsByClassName("infoDiv")[0]);
    infoDiv.animateCss('tada')
    infoDiv.html('<a href="https://github.com/DeJayDev">DeJayDev</a>')
}

function showEmail() {
    var infoDiv = $(document.getElementsByClassName("infoDiv")[0]);
    infoDiv.animateCss('tada')
    infoDiv.html('<a href="mailto:contact@dejaydev.com">contact@dejaydev.com</a>')
}

$(function () {
    var origin = location.hostname.toLowerCase();
    var warning = $(document.getElementsByClassName("warning")[0]);
    if (origin.includes("dejay") || origin.includes("127.0.0.1")) return;
    
    warning.html('It appears you\'ve stumbled upon: ' + origin + '!' +
    '<br> This page is a property owned by DeJay, and will redirect when it is prepared.')
});