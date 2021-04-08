AOS.init();

var rotation = 0;
var prevRotation = 0;
document.addEventListener("scroll", function(oEvent) {
    var diff = window.scrollY - prevRotation;
    prevRotation = window.scrollY;
    rotation += diff;
    var rotationStr = "rotate(" + rotation/5 + "deg)";
    document.querySelectorAll(".profilePicture").forEach(function(item){
        item.style = "-webkit-transform:" + rotationStr + 
                    ";-moz-transform: " + rotationStr + 
                    "; transform:" + rotationStr;
    });
});

document.querySelector("#sidebarCollapse").addEventListener("click", function(oEvent) {
    document.querySelector("#sidebar").classList.toggle("active");
    document.querySelector("#content").classList.toggle("active");

    if (document.querySelector("#sidebarCollapse").parentElement.id == "content"){
        document.querySelector("#profile").before(document.querySelector("#sidebarCollapse"));
        document.querySelector("#sidebarCollapse").style.marginTop = "2vh";
        document.querySelector("#sidebarCollapse").style.parginLeft = "2vh";
    }else if (document.querySelector("#sidebarCollapse").parentElement.id == "sidebar"){
        document.querySelector("#hero").before(document.querySelector("#sidebarCollapse"));
        document.querySelector("#sidebarCollapse").style.marginTop = "0";
        document.querySelector("#sidebarCollapse").style.marginLeft = "0";
    }
});

var currentUrl = window.location.href;
console.log(currentUrl);
if (currentUrl.indexOf("#about") > 0){
    document.querySelector("#navHome").classList.remove("bg-light");
    document.querySelector("#navAbout").classList.add("bg-light");
    document.querySelector("#navApprenticeship").classList.remove("bg-light");
    document.querySelector("#navContact").classList.remove("bg-light");
    document.querySelector("#navImpressum").classList.remove("bg-light");
}else if (currentUrl.indexOf("#apprenticeship") > 0){
    document.querySelector("#navHome").classList.remove("bg-light");
    document.querySelector("#navAbout").classList.remove("bg-light");
    document.querySelector("#navApprenticeship").classList.add("bg-light");
    document.querySelector("#navContact").classList.remove("bg-light");
    document.querySelector("#navImpressum").classList.remove("bg-light");
}else if (currentUrl.indexOf("#contact") > 0){
    document.querySelector("#navHome").classList.remove("bg-light");
    document.querySelector("#navAbout").classList.remove("bg-light");
    document.querySelector("#navApprenticeship").classList.remove("bg-light");
    document.querySelector("#navContact").classList.add("bg-light");
    document.querySelector("#navImpressum").classList.remove("bg-light");
}else if (currentUrl.indexOf("#impressum") > 0){
    document.querySelector("#navHome").classList.remove("bg-light");
    document.querySelector("#navAbout").classList.remove("bg-light");
    document.querySelector("#navApprenticeship").classList.remove("bg-light");
    document.querySelector("#navContact").classList.remove("bg-light");
    document.querySelector("#navImpressum").classList.add("bg-light");
}else{
    document.querySelector("#navHome").classList.add("bg-light");
    document.querySelector("#navAbout").classList.remove("bg-light");
    document.querySelector("#navApprenticeship").classList.remove("bg-light");
    document.querySelector("#navContact").classList.remove("bg-light");
    document.querySelector("#navImpressum").classList.remove("bg-light");
}

document.querySelector("#navHome").addEventListener("click", function(oEvent){
    document.querySelector("#navHome").classList.add("bg-light");
    document.querySelector("#navAbout").classList.remove("bg-light");
    document.querySelector("#navApprenticeship").classList.remove("bg-light");
    document.querySelector("#navContact").classList.remove("bg-light");
    document.querySelector("#navImpressum").classList.remove("bg-light");
});

document.querySelector("#navAbout").addEventListener("click", function(oEvent){
    document.querySelector("#navHome").classList.remove("bg-light");
    document.querySelector("#navAbout").classList.add("bg-light");
    document.querySelector("#navApprenticeship").classList.remove("bg-light");
    document.querySelector("#navContact").classList.remove("bg-light");
    document.querySelector("#navImpressum").classList.remove("bg-light");
});

document.querySelector("#navApprenticeship").addEventListener("click", function(oEvent){
    document.querySelector("#navHome").classList.remove("bg-light");
    document.querySelector("#navAbout").classList.remove("bg-light");
    document.querySelector("#navApprenticeship").classList.add("bg-light");
    document.querySelector("#navContact").classList.remove("bg-light");
    document.querySelector("#navImpressum").classList.remove("bg-light");
});

document.querySelector("#navContact").addEventListener("click", function(oEvent){
    document.querySelector("#navHome").classList.remove("bg-light");
    document.querySelector("#navAbout").classList.remove("bg-light");
    document.querySelector("#navApprenticeship").classList.remove("bg-light");
    document.querySelector("#navContact").classList.add("bg-light");
    document.querySelector("#navImpressum").classList.remove("bg-light");
});

document.querySelector("#navImpressum").addEventListener("click", function(oEvent){
    document.querySelector("#navHome").classList.remove("bg-light");
    document.querySelector("#navAbout").classList.remove("bg-light");
    document.querySelector("#navApprenticeship").classList.remove("bg-light");
    document.querySelector("#navContact").classList.remove("bg-light");
    document.querySelector("#navImpressum").classList.add("bg-light");
});


const heroImage = document.querySelector("#hero");
document.querySelector("body").addEventListener("mousemove", (position) => {
    heroImage.style.backgroundPositionX = -position.offsetX/50 + "px";
    heroImage.style.backgroundPositionY = -position.offsetY/50 + "px";
});