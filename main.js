Webcam.set ({
    width: 350,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 900
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot () {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'" height="275px" width="350px"/>';
    });
}
console.log('ml5 version' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vXuJe7Ih4/model.json' , modelLoaded);
function modelLoaded() {
    console.log(modelLoaded);
}