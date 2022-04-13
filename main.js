Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img src = "'+data_uri+'" id = "capture_image"/>'; 
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('', modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}