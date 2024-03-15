function blue() {
    document.getElementById("mywatch").src = "https://i.imgur.com/Mplj1YR.png"
}
function black() {
    document.getElementById("mywatch").src = "https://i.imgur.com/iOeUBV7.png"
}
function red() {
    document.getElementById("mywatch").src = "https://i.imgur.com/PTgQlim.png"
}
function pink() {
    document.getElementById("mywatch").src = "https://i.imgur.com/Zygu7I3.png"
}
function purple() {
    document.getElementById("mywatch").src = "https://i.imgur.com/xSIK4M8.png"
}

function timer() {
    document.getElementById("heart").style.visibility = 'hidden'
    document.getElementById("heartrate").style.visibility = 'hidden'
    document.getElementById("time").style.visibility = 'visible'


 setInterval(function () {

    function addzero(i) {
        if(i < 10) {
            i="0" + i
        }
        return i;
    }
    var d = new Date();
    // var x = document.getElementById('demo')
    var h = addzero(d.getHours())
    var m = addzero(d.getMinutes())
    var s = addzero(d.getSeconds())
    document.getElementById('time').innerHTML = h + " : " + m+ " : " +s
 }, 0);
}

function heartbeat() {
    document.getElementById('time').style.visibility = "hidden"
    document.getElementById('heartrate').style.visibility = 'visible'
    document.getElementById('heart').style.visibility = 'visible'
}