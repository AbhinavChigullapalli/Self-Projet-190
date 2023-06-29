AFRAME.registerComponent("drive",{
    schema:{
        carMovement:{type:"number", default:0},
        speedOfRotation:{type:"number", default:0}
    },
    init:function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "ArrowUp"){
                this.data.carMovement -= 0.001
            }
            if(e.key === "ArrowDown"){
                this.data.carMovement += 0.001
            }
            if (e.key === "ArrowRight") {
                if (this.data.speedOfRotation > -0.1) {
                  this.data.speedOfRotation -= 0.001;
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.speedOfRotation < 0.1) {
                  this.data.speedOfRotation += 0.001;
                }
            }
        })
    },
    tick:function(){
        var carPosition = this.el.getAttribute("position")
        var carRotation = this.el.getAttribute("rotation")

        carPosition.z += this.data.carMovement

        carRotation.y += this.data.speedOfRotation

        this.el.setAttribute("rotation", {
            x:carRotation.x,
            y:carRotation.y,
            z:carRotation.z
        })

        this.el.setAttribute("position", {
            x:carPosition.x,
            y:carPosition.y,
            z:carPosition.z
        })
    }
})