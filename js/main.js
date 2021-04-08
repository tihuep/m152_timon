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