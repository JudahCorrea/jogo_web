const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const canvasWidth = 564;
const canvasHeight = 317;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let prevTime = 0;

function animate(){
    window.requestAnimationFrame(animate)

    handleControls()

    //context.fillStyle = "black"
    context.fillRect(0,0, canvasWidth, canvasHeight) // preenche a tela do canvas

    background.update()
    player.update()

    player2.update()

    let delta = (performance.now() - prevTime) / 1000
    let fps = 1/ delta

    prevTime = performance.now()
}

animate();
