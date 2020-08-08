document.addEventListener("DOMContentLoaded", function() {
    var origin = location.hostname;
    var flags = new URLSearchParams(window.location.search)

    var warning = document.querySelector(".warning");

    if(flags.keys().next().value) {
        var flag = flags.keys().next().value;

        if(flag.length > 5) {
            console.log('Easter Egg Disabled. Cannot be more than 5 characters long.');
            return;
        };

        if(flag == "trans") {
            document.querySelectorAll(".circle").forEach(circle => circle.remove())
            var body = document.querySelector("body")
            body.style.background = "linear-gradient(#4FA5C2 0%, #4FA5C2 20%, #F587AC 20%, #F587AC 40%, #F9FBFC 40%, #F9FBFC 60%, #F587AC 60%, #F587AC 80%, #4FA5C2 80%, #4FA5C2 100%"
            body.style.color = "black"
        }

        if(flag == "enby" || flag == "nb") {
            document.querySelectorAll(".circle").forEach(circle => circle.remove())
            var body = document.querySelector("body")
            body.style.background = "linear-gradient(black 0%, black 20%, #FFF433 20%, #FFF433 40%, white 40%, white 60%, #9B59D0 60%, #9B59D0 80%, black 80%, black 100%"
            body.style.color = "#FF4D4D"
        }

        if(flag == "bi" || flag == "gay" /* Someone's gonna try it. */) {
            document.querySelectorAll(".circle").forEach(circle => circle.remove())
            var body = document.querySelector("body")
            body.style.background = "linear-gradient(#C1357E 0%, #C1357E 40%, #675997 40%, #675997 60%, #0655A9 60%, #0655A9 100%"
            body.style.color = "white"
        }
        
        var msg = '';
        flag.split('').forEach(char => {
            msg += char + '<br>'
        })

        document.querySelector(".textmain").innerHTML = `<h3>HI, I'M</h3> <h1>${flag.toUpperCase()}</h1> <h2>${msg}</h2>`
    }

    if (!origin.includes("dejay")) {
        warning.innerHTML = 'It appears you\'ve stumbled upon: ' + origin + '!' +
            '<br> This page is a property owned by DeJay, and will redirect when it is prepared.'
    }
    // ;) 
});

// Dark Reader makes my website ugly, we can't have that.
// This doesn't work as well as I want, but we're gonna keep it.
// Source: https://github.com/darkreader/darkreader/issues/1665#issuecomment-552456514
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        for(let node of mutation.addedNodes) {
            if(!(node instanceof HTMLElement)) {
                continue
            }
            if(node.classList.contains('darkreader')) {
                node.remove() 
            }
        }
    })
})

observer.observe(document.head, { childList: true, subtree: false })