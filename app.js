function showContent(page) {
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";

    var links = document.getElementsByClassName("sidebar")[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    event.target.classList.add("active");
}