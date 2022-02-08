let navigation = document.querySelector(".navbar");
let breadCrumb = document.querySelector(".menu-btn");
let cancel = document.querySelector(".cancel-btn");
let navItems = document.querySelector(".menu");
let scrollDown = document.querySelector("nav");
let homeViewArrow = document.querySelector(".home-view");

breadCrumb.onclick = function() {
    navigation.classList.add("active");
    breadCrumb.style.opacity = "0";
}
cancel.onclick = function() {
    navigation.classList.remove("active");
    breadCrumb.style.opacity = "1";
}
navItems.onclick = function() {
    navigation.classList.remove("active");
    breadCrumb.style.opacity = "1";
}
window.onscroll = function() {
    if(document.documentElement.scrollTop > 400){
        scrollDown.classList.add("scrollDown");
        homeViewArrow.classList.add("scrollDownBtn");
    }else{
        scrollDown.classList.remove("scrollDown");
        homeViewArrow.classList.remove("scrollDownBtn");
    }
}