recargar();
function recargar(){
    var titulo = "QQJ_Noticia1 - 00/00/0000";
    var aux = titulo;
    var audioLink = "QQJ_Mortalidad_de_los_michis.mp3";
    var numeroNoticias = 10;
    for(i = 1; i <= numeroNoticias; i++){ 
        aux = i+"_"+titulo;
        //audioLink = i+"_"+audioLink;
        var linea =
        "<br>"+
        "<p style='text-align: center;'>"+aux+"</p>"+
        "<br>"+
        "<audio style=\"width: 400px; height: 50px;\" controls controlsList=\"nodownload\">"+
            "<source src='"+audioLink+"' type=\"audio/mpeg\">"+
        "</audio>"+
        "<div style=\"float: right;\">"+
        "<label>Descargar</label>"+
        "<button style=\"height: 50px; width: 50px; background: url('/assets/mp3.png') center no-repeat; background-size: 100% 100%; cursor: pointer;\" onclick='descargaAudio()''></button>"+
        "<button style=\"height: 50px; width: 50px; background: url('/assets/imagen.png') center no-repeat; background-size: 100% 100%; cursor: pointer;\" onclick='descargaImagen()'></button>"+
        "<button style=\"height: 50px; width: 50px;background: url('/assets/mp4.png') center no-repeat; background-size: 100% 100%; cursor: pointer;\" onclick='descargaVideo()'></button>"+
        "</div>"+
        "<br>"+
        "<hr/>";
        document.getElementById("resultado").innerHTML+=linea;
    }
}
function descargaAudio(){
    alert("descargando audio");
}
function descargaImagen(){
    alert("descargando imagen");
}
function descargaVideo(){
    alert("descargando video");
}
function crearNota(){
    var user = "1";    
    if(user === "1"){
        location.href = "../nuevaNota/nuevaNota.html";
    } else if(user === "2"){
        location.href = "../nuevaNotaInternacional/nuevaNotaInternacional.html";
    }
}
function crearPubli(){
    location.href = "../publicidadRadio/publicidadRadio.html";
}