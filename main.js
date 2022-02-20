function preload() {
    img = loadImage('https://i.postimg.cc/W4qR8dCG/1426179.png');
}

R_eyeX = "";
R_eyeY = "";

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
        R_eyeX = results[0].pose.rightEye.x;
        R_eyeY = results[0].pose.rightEye.y;
        console.log("right eye x =" + results[0].pose.rightEye.x);
        console.log("right y =" + results[0].pose.rightEye.y);
     
    }
}


function draw() {
    image(video , 0 , 0 , 400 , 400);
    image(img , R_eyeY-30  ,R_eyeY-10  , 50 ,55);
}

function take_snapshot() {
    save("My_selfie.jpg")
}
