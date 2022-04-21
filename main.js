noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Movie: Avengers: Endgame This movie shows how sometimes sacrifice is the only way to save the people you love. It shows how the Avengers travel back in time and take the risks of dying for their loved ones. But as soon as the bring the people back, Thanos (the villan) also somehow comes through the portal. He blows up their compound and they have an all out fight. I would rate this movie 9.5 out of 10 because there is always room for improvement.");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor (leftWristX - rightWristX);
        
        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);

    }

}

function draw(){
    background('#899D78');

    document.getElementById("Text_Size").innerHTML= "Width and Height of text will be = " + difference + "px";
    fill('#923490');
    textSize(difference);
    text('AaravDua' ,100, 100);
   
}