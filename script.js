const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.getElementById('main');

let hex = undefined;
hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
colorSimple = new Array("red","orange","yellow","green","blue","purple","pink","brown","gray","black","white");

const generarColor = ()=>{
    if(hex == true){
    let colorAleatorio = "#";
    for(let i=0;i<6;i++){
        let numRandom = hexadecimal[Math.floor(Math.random() * 16)]
        colorAleatorio += numRandom
    }
    return colorAleatorio
    } else if(hex == false) {
        return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})` 
    } else {
        return `${colorSimple[Math.floor(Math.random()*11)]}`
    }
}

document.getElementById('simple').addEventListener('click',(e)=>{
    e.preventDefault()
    hex = undefined
    document.title = "Color Flipper || Simple"
})

document.getElementById('hex').addEventListener('click',(e)=>{
    e.preventDefault()
    hex = true
    document.title = "Color Flipper || Hex"
})

document.getElementById('rgb').addEventListener('click',(e)=>{
    e.preventDefault()
    hex = false
    document.title = "Color Flipper || RGB"
})

btn.addEventListener('click',()=>{
    let colorRandom = generarColor()
    color.innerHTML = `${colorRandom}`
    document.body.style.backgroundColor = colorRandom
});