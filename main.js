function preload() {
}

function setup() {
    canvas = createCanvas(400 ,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.hide();
    posenet = ml5.poseNet(video ,modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {

    if(results.length > 0) {
        console.log(results);
        console.log("right eye x =" + results[0].pose.rightEye.x);
        console.log("right y =" + results[0].pose.rightEye.y);
     
    }
}


function draw() {
    image(video , 0 , 0 , 400 , 400)
}

function take_snapshot() {
    save("My_selfie.jpg")
}
