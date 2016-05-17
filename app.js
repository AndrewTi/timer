var d = 0;
var h = 0;
var m = 0;
var s = 0;

var aaa = false;
var aab = false;



function seletId(id){
    return document.getElementById(id);
}
function outputTime(idElem, time) {
    if(idElem == "ss") {
        (time < 10)? seletId(idElem).textContent = "0"+time : seletId(idElem).textContent = time;

    }else {
        (time < 10)? seletId(idElem).textContent = "0"+time+":" : seletId(idElem).textContent = time+":";
    }

}

document.body.addEventListener("mousemove", function(e){
    console.log(e.clientY);
    document.body.style = "background : rgba("+e.clientX+","+e.clientY+",10, 0.3)";
})

setInterval(function(){
    s++;
    if(s == 8) {
        aab = true;
    }
    if(s == 9) {
        aaa = true;
    }
    if(s >= 60) {
        s = 0;
        m++;
        if(m >= 60) {
            m = 0;
            h++;
            if(h >= 24) {
                d++;
            }
        }
    }

    outputTime("ss",s);
    outputTime("mm",m);
    outputTime("hh",h);
    outputTime("dd",d);

    if(aab) {
        seletId("gav").insertAdjacentHTML("afterbegin", "<audio src='aaa.mp3' autoplay></audio>");
    }
    if(aaa) {
        seletId("aaa").firstElementChild.style = "visibility: visible";
    }

},1000);
