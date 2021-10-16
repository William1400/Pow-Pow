function loadImages(urls) {

    let urlKeys = Object.keys(urls);
    let count = 0;
    let images = {};
    for (let i = 0; i < urlKeys.length; i++) {

        let image = new Image();
        image.onload = () => {

            count++;
            images[urlKeys[i]] = image;
            if (count == urlKeys.length) {

                startGame(images);

            }
        }
        image.src = urls[urlKeys[i]];

    }

}

function startGame(images) {

    let game = new Game(images);
    setInterval(() => {

        game.run();

    }, 1000 / 60);

}

loadImages(Game.urls);

