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

function showText(text) {
    var infoDiv = $('.infoDiv');
    infoDiv.animateCss('tada');
    infoDiv.text(text);
}

function clearText() {
    var infoDiv = $('.infoDiv');
    infoDiv.text('');
}

$(function () {
    var origin = location.hostname.toLowerCase();
    var warning = $(document.getElementsByClassName("warning")[0]);

    if (origin.includes("dejay") || origin.includes("127.0.0.1") || origin.includes('localhost')) return;

    warning.html('It appears you\'ve stumbled upon: ' + origin + '!' +
        '<br> This page is a property owned by DeJay, and will redirect when it is prepared.')

    function showText(text) {
        infoDiv.animateCss("tada");
        infoDiv.text(text);
        changeColor()
    }
});