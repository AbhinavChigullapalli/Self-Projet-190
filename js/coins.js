// Registering component in Collider.js
AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        var position = { x: 0, y: 2, z: 0 };
  
        //call the function
        this.coins(id, position);
      }
    },
    coins: (id, position) => {
      //Get the terrain element
      var roadEl = document.querySelector("#road");
  
      //creating the bird model entity
      var coinEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      coinEl.setAttribute("id", id);
  
      coinEl.setAttribute("position", position);

      coinEl.setAttribute("gltf-model", "./assets/stylized_coin/scene.gltf")

      birdEl.setAttribute("scale", { x: 50, y: 50, z: 50 });
  
      //set the static body of the physic system
      coinEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3.2,
      });
  
      //set the game play attribute
      coinEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      //append the bird entity as the child of the terrain entity
      roadEl.appendChild(coinEl);
    },
  });
  