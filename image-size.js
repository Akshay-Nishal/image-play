var cont = document.getElementById("container");
var element = document.getElementById("ibox");
// element.style.height = "200px";
h = element.clientHeight;
w = cont.clientWidth;
// console.log(h,w)
// v = 250;
var ih = document.getElementById('ih')
var dh = document.getElementById('dh')
var ci = document.getElementById('ci')
var im = element.getElementsByTagName('img')

ih.addEventListener('click', inch)
dh.addEventListener('click', dech)
ci.addEventListener('click', cimg)
cc.addEventListener('click', bgc)
ri.addEventListener('click', rimg)
fi.addEventListener('click', fimg)

var flip = 0

function fimg(){
    if(flip==0){
        im[0].style.transform='scaleX(-1)'
        flip = 1
    }
    else{
        im[0].style.transform='scaleX(1)'
        flip = 0
    }
}

var rdeg = 0
function rimg(){
    rdeg = rdeg + 90
    im[0].style.transform='rotate('+rdeg+'deg)'
    // console.log(im);
    // im[0].cssText = '@keyframes rotation{from {transform: rotate(0deg);}to {transform: rotate(359deg);}}'
}


// function bgc(){
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var rgb = `rgb(${r},${g},${b})`
//     console.log(rgb);
//     cont.style.background = rgb
// }

function bgc(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    col = 'rgb('+r+', '+g+', '+b+')'
    // console.log(col);
    cont.style.background=col

}





var x = 1

// function cimg(){
//     if(x==1){
//         im[0].src='./IMG_0967.PNG'
//         x=0
//         console.log(im[0].src);
//     }
//     else{
//         im[0].src='./IMG_0966.PNG'
//         x=1
//         console.log(im[0].src);
//     }
//     console.log("image changed");

// }

function cimg(){
    str = im[0].src+''
    l = str.length
    // console.log(str.slice((l-12),));
    if(str.slice((l-12),)=='IMG_0966.PNG'){
        im[0].src='./IMG_0967.PNG'
    }
    else{
        im[0].src='./IMG_0966.PNG'
    }
    // console.log("image changed");

}

function inch(){
    hi = ''
    h=h+50
    if(h<w){
        dh.style.background='white'
        hi=h+'px'
        // consoles.log(hi);
        element.style.height=hi;
        // console.log('height increased');
    }
    else{
        h-=50
        // ih.disabled = strue
        ih.style.background='rgb(239, 100, 6)'
    }
}

function dech(){
    hi = ''
    h=h-50
    if(h>=100){
        ih.style.background='white'
        hi=h+'px'
        // console.log(hi);
        element.style.height=hi;
        // console.log('height decreased');
    }
    else{
        // dh.disable = true
        h+=50
        dh.style.background='rgb(239, 100, 6)'
    }
}