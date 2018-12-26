"use strict";
function initActive(elems, func) {
    const items = document.getElementsByClassName(elems);
    let active = 0,
    i = items.length;
    while(i--) items[i].onclick = function() {
        items[active].classList.remove("active");
        this.classList.add("active");
        active = Number(this.dataset.index);
        func ? (
            document.getElementById("slider").style.transform = "translateX(calc(" + (active * 100) + "% + " + (!active ? 0 : active === 1 ? 5 : 20) + "px)",
            document.getElementById("right-content").textContent = !active ? "Project Summary Template" : active === 1 ? "WO's Template" : "PO's Template"
        ) : (
            console.log("asdf")
        )
    }
}
initActive("tab", false);
initActive("rn-item", true);

