function preload(){
    tongue = loadImage('https://i.postimg.cc/nhpcfdRH/images-removebg-preview.png');
    lipstick = loadImage('https://i.postimg.cc/TwXttD2H/download-2-removebg-preview.png');
    mustache = loadImage('https://i.postimg.cc/x88M5fm4/mustache-removebg-preview.png');
    sunglasses = loadImage('https://i.postimg.cc/QCc90FtS/sun-removebg-preview.png');
    clown = loadImage('https://i.postimg.cc/fybYPPfg/download-1-removebg-preview.png');
    dog = loadImage('https://i.postimg.cc/RZSdJBs2/dog-removebg-preview.png');
    elephant = loadImage('https://i.postimg.cc/pr0T0Kvf/elephant-removebg-preview.png');

    noseX = 0;
    noseY = 0;
    colors = "white";
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(510,170);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose = ml5.poseNet(video,load);
    pose.on('pose',results);
}
function results(result){
    if(result.length>0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        eyeX = result[0].pose.rightEye.x;
        eyeY = result[0].pose.rightEye.y;
    }
}
function load(){
    console.log("model loaded");
}
function draw(){
    if(document.getElementById("nad").value ==  "No Filter"){
        GlassesX = 500;
        GlassesY = 500;
    }else if(document.getElementById("nad").value == "SUNGLASSES"){
        GlassesX = eyeX-35;
        GlassesY = eyeY-10;
    }

    if(document.getElementById("nam").value == "No Filter"){
        TongueX = 500;
        TongueY = 500;
        LipstickX = 500;
        LipstickY = 500;
        MustacheX = 500;
        MustacheY = 500;
    }else if(document.getElementById("nam").value =="Mustache"){
        TongueX = 500;
        TongueY = 500;
        LipstickX = 500;
        LipstickY = 500;
        MustacheX = noseX-25;
        MustacheY = noseY+5;
    }else if(document.getElementById("nam").value == "Lipstick"){
        TongueX = 500;
        TongueY = 500;
        LipstickX = noseX-40;
        LipstickY = noseY+10;
        MustacheX = 500;
        MustacheY = 500;
    }else if(document.getElementById("nam").value == "Tongue"){
        TongueX = noseX-50;
        TongueY = noseY+10;
        LipstickX = 500;
        LipstickY = 500;
        MustacheX = 500;
        MustacheY = 500;
    }

    if(document.getElementById("nak").value == "No Filter"){
        ClownX = 500;
        ClownY = 500;
        DogX = 500;
        DogY = 500;
        ElephantX = 500;
        ElephantY = 500;
    }else if(document.getElementById("nak").value =="Dog"){
        ClownX = 500;
        ClownY = 500;
        DogX = noseX-75;
        DogY = noseY-50;
        ElephantX = 500;
        ElephantY = 500;
    }else if(document.getElementById("nak").value == "Clown"){
        ClownX = noseX-15;
        ClownY = noseY-15;
        DogX = 500;
        DogY = 500;
        ElephantX = 500;
        ElephantY = 500;
    }else if(document.getElementById("nak").value == "Elephant"){
        ClownX = 500;
        ClownY = 500;
        DogX = 500;
        DogY = 500;
        ElephantX = noseX-20;
        ElephantY = noseY-10;
    }
    image(video,0,0,300,600);
    tint(colors);
    image(tongue,TongueX,TongueY,100,40);
    image(lipstick,LipstickX,LipstickY,80,50);
    image(mustache,MustacheX,MustacheY,50,30);
    image(sunglasses,GlassesX,GlassesY,100,50);
    image(clown,ClownX,ClownY,30,30);
    image(dog,DogX,DogY,150,100);
    image(elephant,ElephantX,ElephantY,40,90);
    console.log(noseX);
}
function blueTint(){
    colors = "blue";
}
function cyanTint(){
    colors = "cyan";
}
function greenTint(){
    colors = "green";
}
function normalTint(){
    colors = "white";
}
function redTint(){
    colors = "red";
}
function yellowTint(){
    colors = "yellow";
}
function download(){
    save("filter.jpg");
}