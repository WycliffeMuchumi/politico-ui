function openLink(evnt, link) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-content");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-link", "");
    }
    document.getElementById(link).style.display = "block";
    evnt.currentTarget.className += " active-link";
}