console.log("test");
window.onload = function(){
    var copy = document.getElementById("js_copy");
    var cancel = document.getElementById("js_cancel");
    var img_old = document.getElementById("js_img_old");
    var img_new = document.getElementById("js_img_new");

    copy.onclick = function(){
        var img = img_old.getAttribute("src");
        img_new.setAttribute("src",img);
        img_new.style.display = "block";
    };
    cancel.onclick = function(){
        img_new.setAttribute("src","");
        img_new.style.display = "none";
    };
};