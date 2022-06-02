const canv = document.querySelector('.canvas');
let temp, temp2, n;

n = Number(prompt("Enter n"));

function createCanvas(n) {
    let i, j;
    for(i=0;i<n;i++){
        temp = document.createElement("div");
        temp.classList.add(`rows`);
        temp.style.height = `${512/n}px`;
        temp.setAttribute('draggable', 'false');
        canv.appendChild(temp);
        for(j=0;j<n;j++){
            temp2 = document.createElement("div");
            temp2.classList.add(`pixels`);
            temp2.setAttribute('draggable', 'false');
            temp.appendChild(temp2);
        }
    }  
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

createCanvas(n);

function addCol(e){
    if(e.type === 'mouseover' && !mouseDown) return;

    e.target.classList.add('color');
}

function evl(pix){
    pix.addEventListener('mousedown', addCol);
    pix.addEventListener('mouseover', addCol);
}

const pixels = document.querySelectorAll('.pixels');
pixels.forEach(evl);