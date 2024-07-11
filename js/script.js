window.addEventListener('scroll', () => {
    console.log("worked");
    if (window.scrollY < 10) {
        document.querySelector("nav").style.backgroundColor = "transparent"
    }
    else if (window.scrollY > 10) {
        document.querySelector("nav").style.backgroundColor = "white"
    }
});