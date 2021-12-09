// eerste variable maken en dan waarden geven.
var postion = 0;
var img1 = "./img/deel1.2.jpg";
var img2 = "./img/deel1.3.jpg";
var img3 = "./img/deel1.4.jpg";
var img4 = "./img/deel1.5.jpg";
var img5 = "./img/deel1.1.jpg";



//  heb de function  aangegeven waar ie  naar toe moet.
function stop_met_aanraken(){
    // andere variable gemaakt
    var imgElement = document.getElementById("img");
    postion = postion + 1;
    // if is een option 
    if(postion == 5){
        postion = 0;
    }
    if(postion == 0){
        imgElement.src = img1;
    }
    if(postion == 1){
        imgElement.src = img2;
    }
    if(postion == 2){
        imgElement.src = img3;
    }
    if(postion == 3){
        imgElement.src = img4;
    }
    if(postion == 4){
        imgElement.src = img5
    }

}
