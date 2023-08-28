function random_color(){
    let a=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex='#';
    for (let i=0;i<6;i++){
        let num=Math.floor(Math.random()*16);
        hex=hex+a[num];
    }
    document.body.style.backgroundColor=hex;
    document.getElementById('colorname').innerHTML=hex;
}

let btn=document.getElementById('btn');
let color=btn.addEventListener('click',random_color);
