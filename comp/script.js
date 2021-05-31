const F = document.getElementsByClassName("sect")
const H = document.getElementsByClassName("faqhead")
const A = document.getElementsByClassName("arrow")

for(var i=0; i<F.length; ++i) {
    F[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
    var S = this.parentNode.className;
    // for(var i=0; i<F.length; ++i){
    //     F[i].className = "sect";
    //     H[i].className = "faqhead";
    //     A[i].className = "arrow";
    // }
    if(S == "sect"){
        this.parentNode.classname = "sect sect-clicked";
        H.classname = "faqhead faqhead-clicked";
        this.firstElementChild.className = "arrow arrow-clicked";
    }
}
