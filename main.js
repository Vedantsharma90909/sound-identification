//https://teachablemachine.withgoogle.com/models/7FWCLcfTO/


function start() {
    console.log("i am here");
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7FWCLcfTO/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
    console.log("inside  model ready")
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        randomnumber_r = Math.floor(Math.random() * 255) + 1;
        randomnumber_g = Math.floor(Math.random() * 255) + 1;
        randomnumber_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_lable").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("Accuracy").innerHTML = "Accuracy is -  " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_lable").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";
        document.getElementById("Accuracy").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";

        img = document.getElementById('alien1');
        img2 = document.getElementById('alien2');
        img3 = document.getElementById('alien3');
        img4 = document.getElementById('alien4');


        if (result[0].lable == "clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (result[0].label == "bell") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (result[0].label == "snap") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        } else{
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }
    }
}