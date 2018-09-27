

var p = document.getElementById('count');



// function zero(z) puts zeros at the seconds

function zero(z) {
    if (z < 10) {
        z = "0" + z;
    }
    return z;
}

function time() {
    var d = new Date();
    var h = zero(d.getHours());
    var m = zero(d.getMinutes());
    var s = zero(d.getSeconds());
    p.innerHTML = h + ":" + m + ":" + s;
    var r = parseInt(s) *10 ;
    var g = parseInt(m) *2 ;
    var b = parseInt(h) *600 ;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    p.style.textAlign = 'center'
    p.style.fontFamily = 'Lucida Console'
    p.style.fontSize = '100px'
    p.style.color = 'white';
    p.style.border= '5px solid grey'
    p.style.borderRadius = '25px'
    p.style.backgroundColor = 'blue';
}

setInterval(function() {
    time()
}, 1000);
