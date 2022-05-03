//_________________________________________________//
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
    if (scrolled >= 654) {
        document.getElementById("topMain").style.opacity = "1";

    } else {
        document.getElementById("topMain").style.opacity = "0";
    }
});

//_____________________________//
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
    if (scrolled >= 30) {
        document.getElementById("shopTitleFixed").style.opacity = "0";

    } else {
        document.getElementById("shopTitleFixed").style.opacity = "1";
    }
});
//_____________________________//
setTimeout(function() { document.getElementById("containerLoading").remove(); }, 4000);
setTimeout(function() { document.getElementById("containerLoading2").remove(); }, 2000);
setTimeout(function() { document.getElementById("clps").classList.remove("clps"); }, 500);
setTimeout(function() { document.getElementById("clps").classList.add("clpsPOST"); }, 500);
//_____________________________//