


const myimage = document.getElementById('myimage');
const mytitles = document.getElementById('mytitles');


let paintings = ["painting0.jpg",  
                "painting1.jpg", 
                "painting2.jpg", 
                "painting3.jpg", 
                "painting4.jpg", 
                "painting5.jpg"]

let titles = [
                "schilderijen",
                "De rode wijngaard",
                "De sterrennacht",
                "Sterrennacht",
                "Zonnebloemen",
                "Boerderij in de Provence"];

function changeimage(index){
    mytitles.innerHTML = titles[index];
    myimage.src = paintings[index];
}















