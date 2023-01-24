diferenca = 0;
pulsoDireito = 0;
pulsoEsquerdo = 0;
function draw(){
    background("black");
    textSize(diferenca);
    fill("white");
    text(document.getElementById("texto").value, 10,40);
}
function setup(){
    video = createCapture(VIDEO);
    video.size(425, 425);
    video.position(500,200);
    canvas = createCanvas(325, 325);
    canvas.position(1100, 250);
    poseNet = ml5.poseNet(video, modeloCarregado);
    poseNet.on("pose", pegarResultado);
}
function modeloCarregado(){
    console.log("Modelo carregado : )");
}
function pegarResultado(results){
    if(results.length > 0){
        console.log(results);

        pulsoDireito = results[0].pose.rightWrist.x;
        pulsoEsquerdo = results[0].pose.leftWrist.x;

        console.log(pulsoDireito);
        console.log(pulsoEsquerdo);

        console.log("Pulso Direito :" + pulsoDireito + ". Pulso Esquerdo :" + pulsoEsquerdo);

        diferenca = floor(pulsoEsquerdo - pulsoDireito);
    }
}
