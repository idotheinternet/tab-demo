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
    }
}
initTabs("item");
initTabs("tab");

