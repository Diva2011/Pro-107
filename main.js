function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oihPmop6k/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults(error , results));
}




