
var rand = Math.floor((Math.random()*3));

var lst = [];
for (index = 0, len = 3; index < len; ++index) {

   lst[index] = "<img id='"+index+"' onclick='tikla(this.id)' class='kart' src='./foto/mavi.jpg'>"
}


const deger = rand;
var div = document.getElementById('blok');
div.innerHTML = lst;

var say = 0;

function tikla(clickId){
say++;

if(clickId == deger){
     document.getElementById(clickId).src="./foto/kedi.jpg";
     document.getElementById("alanId").innerHTML="Kazandın tebrikler! Yeni bir oyun oynamak istersen <a href=''>buraya</a> tıklayabilirsin. ";
}else{
  
    if(say >=2){
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <a href=''>buraya</a> tıklayabilirsin. ";

    }
    document.getElementById(clickId).src="./foto/kopek.jpg";
}
}
