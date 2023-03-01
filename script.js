
Webcam.attach("#camara");
div=document.getElementById("camara");
Webcam.set({
    width:350,
    heigth:300,
    image_format:"png",
    png_quality:90
})
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='selfie_image' src='"+data_uri+"'>";
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lwt5GvBgD/model.json",modelload());
function modelload(){
    console.log="modelo cargado"
}