const canv = document.querySelector('.canvas');
let temp, temp2, n;

n = Number(prompt("Enter n"));

function createCanvas(n) {
    let i, j;
    for(i=0;i<n;i++){
        temp = document.createElement("div");
        temp.classList.add(`rows`);
        temp.style.height = `${512/n}px`;
        canv.appendChild(temp);
        for(j=0;j<n;j++){
            temp2 = document.createElement("div");
            temp2.classList.add(`pixels`);
            temp.appendChild(temp2);
        }
    }  
}

createCanvas(n);

function evl(pix){
    pix.addEventListener('mouseenter', (e)=>e.target.classList.add('color'));
    pix.addEventListener('mouseleave', (e)=>e.target.classList.remove('color'));
}

const pixels = document.querySelectorAll('.pixels');
pixels.forEach(evl);