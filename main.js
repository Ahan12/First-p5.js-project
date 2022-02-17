function preload() {

}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();




}

function draw() {
    fill(255, 0, 0);
    circle(40, 30, 60);
    circle(40, 360, 60);
    circle(551, 360, 60);
    circle(551, 30, 60);
    fill(0, 255, 0)
    rect(70, 350, 450, 20);
    rect(70, 20, 450, 20);
    rect(30, 60, 20, 270);
    rect(545, 60, 20, 270);
    image(video, 70, 40, 450, 310);


}

function take_snapshot() {
    save('Student_name.png');

}