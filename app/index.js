"use strict";
function initTabs(elems) {
    const items = document.getElementsByClassName(elems);
    let i = items.length;
    while(i--) items[i].onclick = function() {
        let i = items.length;
        while(i--) {
            if(items[i].classList.contains("active")) {
                items[i].classList.remove("active");
                break;
            }
        }
        this.classList.add("active");
        if(this.dataset.info) getData(this.dataset.info);
    }
}
function getData(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/data/" + data, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) showInfo(this.response);
    }
}
function showInfo(data) {
    const names = document.getElementsByClassName("name"),
    info = JSON.parse(data),
    keys = Object.keys(info),
    len = keys.length;
    let i = 1;
    for(; i < len; i++) {
        document.getElementById(keys[i]).textContent = info[keys[i]];
    }
    i = names.length;
    while(i--) names[i].textContent = info.name + " Project";
}
initTabs("item");
initTabs("tab");
document.getElementById("pill").onclick = function() {
    !this.classList.contains("active") ? this.classList.add("active") : this.classList.remove("active");
}

