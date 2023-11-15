const keys = { // mapea os controles e escuta as teclas do teclado
    a: {
        pressed: false
    },

    d: {
        pressed: false
    },

    w: {
        pressed: false,
        hold: false
    },

    space: {
        pressed: false,
        hold: false
    }
}

window.addEventListener('keydown' , e =>{
    let key = e.key

    switch(key){
        case "ArrowLeft":
        case "a":
            keys.a.pressed = true 
            player.lastKeyPressed = key
            player2.lastKeyPressed = key
            break

        case "ArrowRight":
        case "d":
            keys.d.pressed = true
            player.lastKeyPressed = key
            player2.lastKeyPressed = key
            break

        case "ArrowUp":            
        case "w":
            keys.w.pressed = true
            break

        case "l":
        case " ":
            keys.space.pressed = true
            break
    }
})

window.addEventListener('keyup' , e =>{
    let key = e.key

    switch(key){
        case "ArrowLeft":
        case "a":
            keys.a.pressed = false 
            break

        case "ArrowRight":
        case "d":
            keys.d.pressed = false
            break

        case "ArrowUp":            
        case "w":
            keys.w.pressed = false
            keys.w.hold = false
            break
        
        case "l":
        case " ":
            keys.space.pressed = false
            keys.space.hold = false
            break;
    }
}) // fim mapea controles

function handleControls(){
    movement()
    attacks()

    function movement(){
        player.velocity.x = 0
        player2.velocity.x = 0

        if(keys.a.pressed && ["a"].includes(player.lastKeyPressed)){
            player.velocity.x = -4.5
        }

        if(keys.a.pressed && [ "ArrowLeft"].includes(player2.lastKeyPressed)){
            player2.velocity.x = -4.5
        }


        if(keys.d.pressed && ["d"].includes(player.lastKeyPressed)){
            player.velocity.x = 4.5
        }

        if(keys.d.pressed && ["ArrowRight"].includes(player2.lastKeyPressed)){
            player2.velocity.x = 4.5
        }

        if(keys.w.pressed && !keys.w.hold){
            player.jump()
            keys.w.hold = true
        }

        if(keys.w.pressed && !keys.w.hold){
            player2.jump()
            keys.w.hold = true
        }
    }

    function attacks(){
        if(keys.space.pressed && !keys.space.hold){
            player.attack()

            keys.space.hold = true
        }
    }
}
