const canv = document.querySelector('.canvas');
let temp, temp2, n, pixels;

let canvStyle = getComputedStyle(canv);
// let x = Number(canvStyle.height.slice(0,canvStyle.height.length - 2));


// Function to create canvas, takes as input an integer and updates
// container with n*n *pixels*

function createCanvas(n) {
    let i, j;
    for(i=0;i<n;i++){
        temp = document.createElement("div");
        temp.classList.add(`rows`);
        temp.style.height = `${720/n}px`;
        temp.setAttribute('draggable', 'false');
        canv.appendChild(temp);
        for(j=0;j<n;j++){
            temp2 = document.createElement("div");
            temp2.classList.add(`pixels`);
            temp2.setAttribute('draggable', 'false');
            temp2.addEventListener('mousedown', draw);
            temp2.addEventListener('mouseover', draw);
            temp.appendChild(temp2);
        }
    }
}

const colPick = document.querySelector("#color");
let color = colPick.value;
 colPick.oninput = ()=>{
     color = colPick.value;
 }

let flag = 'normal';
document.querySelector('#normal'). onclick = ()=>flag='normal';
document.querySelector('#erase'). onclick = ()=>flag='erase';

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function clear(){
    // pixels.forEach((x)=>x.style.background = "white");
    while(canv.firstChild){
        canv.removeChild(canv.firstChild);
    }
    n = slider.value;
    createCanvas(n);
}

function draw(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    if(flag==='normal'){
        e.target.style.background = color;
    }
    else if(flag==='erase'){
        e.target.style.background = canvStyle.backgroundColor;
    }
}


const clr = document.querySelector('#clear');
clr.onclick = clear;


// Code for slider to change dimensions of canvas

const slider = document.querySelector('#dimensions');
slider.oninput = ()=>{
    while(canv.firstChild){
        canv.removeChild(canv.firstChild);
    }
    n = slider.value;
    createCanvas(n);
};


createCanvas(slider.value);
