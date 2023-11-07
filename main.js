leftWristx = 0;
rightWristx = 0;
nosex = 0;
nosey = 0;
difference  = 0;
color = "";
font = "";
function setup () {
     video = createCapture(VIDEO);
     video.size(530, 530);
     video.position(5, 110)
     canvas= createCanvas(500, 450);
     canvas.position(830, 130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
var input = "";
function nextPage () {
    input = document.getElementById("input").value;
    if (input == "") {
        input = "Nothing";
    }
    console.log(input);
    document.getElementById("input").innerHTML = "";
}
function modelLoaded () {
    console.log("PoseNet is initialized");
}
function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x-50;
        nosey = results[0].pose.nose.y;
        console.log("Nose x - " + nosex + ", Nose y - " + nosey);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        console.log("Left Wrist x - " + leftWristx + ", Right Wrist x - " + rightWristx);
        difference = Math.floor(leftWristx - rightWristx);
        console.log("Difference - " + difference);
    }
}
function redChosen () 
{
    color = "red";
}

function orangeChosen () 
{
    color = "orange";
}

function yellowChosen () 
{
    color = "yellow";
}

function greenChosen () 
{
    color = "green";
}

function blueChosen () 
{
    color = "blue";
}

function cyanChosen () 
{
    color = "cyan";
}

function purpleChosen () 
{
    color = "purple";
}

function whiteChosen () 
{
    color = "white";
}

function blackChosen () 
{
    color = "black";
}

function pinkChosen()
{
    color = "pink";
}

function draw () {
    background("#77a4b9");
    textSize(difference);
    text(input, nosex, nosey);
    document.getElementById("text_size").innerHTML="The size of the text is "+difference+" pixels";
    if (color == "red") 
    {
        fill("red");
    }
    else if (color == "orange") 
    {

        fill("orange");
    }
    else if (color == "yellow") 
    {
        fill("yellow");
    }
    else if (color == "green") 
    {
        fill("green");
    }
    else if (color == "blue") 
    {
        fill("blue");
    }
    else if (color == "cyan") 
    {
        fill("cyan");
    }
    else if (color == "purple") 
    {
        fill("purple");
    }
    else if (color == "white") 
    {
        fill("white");
    }
    else if (color == "black") 
    {
        fill("black");
    }
    else if (color == "pink")
    {
        fill("pink")
    }
}

function lobchoose()
{
    font = "lob";
}

  if(font == "lob")
  {
    document.getElementById("input").style = "font-family:lobster;"
  }








