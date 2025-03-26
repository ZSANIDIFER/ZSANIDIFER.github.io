$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 610, 200, 10);
    createPlatform(530, 500, 100, 10);
    createPlatform(400, 420, 50, 10);
    createPlatform(300, 420, 50, 10);
    createPlatform(200, 420, 50, 10);
    createPlatform(500, 320, 100, 10);
    createPlatform(200, 200, 200, 10);
    createPlatform(600, 200, 200, 10);
    createPlatform(1000, 200, 200, 10);
    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 600, 0, 0);
    createCollectable("diamond", 250 ,300, 0, 0);
    createCollectable("max", 700, 100, 0, 0);

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 2000);
    createCannon("top", 500, 2000);
    createCannon("right", 300, 2000);
    createCannon("left", 500, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
