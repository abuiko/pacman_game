document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const scoreDisplay = document.getElementById('score');
    const width = 28; //28 x 28 = 784 squares
    let score = 0;

    // content and layout of grid and squares
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    // 0 -dots
    //1 -wall
    //2 -ghost-lair
    //3 - power-pellet
    //4 -empty
    const squares = [];


    //draw grid
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement("div");
            grid.appendChild(square);
            squares.push(square);


            // layout styling

            if (layout[i] === 0) {
                squares[i].classList.add("pac-dot");
            } else if (layout[i] === 1) {
                squares[i].classList.add("wall");
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {

                squares[i].classList.add("power-pellet");

            }
        }
    }

    createBoard();

    // starting pac-man position
    let pacmanCurrentIndex = 490;
    squares[pacmanCurrentIndex].classList.add("pac-man");

    // move pac-man 
    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove('pac-man');

        switch (e.keyCode) {
            case 37: //arrowleft
                if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains('wall') && !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair"))
                    pacmanCurrentIndex -= 1;

                // check if pacman near left exit
                if (pacmanCurrentIndex - 1 === 363) {
                    pacmanCurrentIndex = 391
                }
                break;
            case 38: //arrowup
                if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains('wall') && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair"))
                    pacmanCurrentIndex -= width;
                break;
            case 39: //arrowright
                if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex + 1].classList.contains("wall") && !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair"))
                    pacmanCurrentIndex += 1;
                // check if pacman near right exit
                if (pacmanCurrentIndex + 1 === 392) {
                    pacmanCurrentIndex = 364;
                }
                break;
            case 40: //arrowdown
                if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair"))
                    pacmanCurrentIndex += width;
                break;
        }
        squares[pacmanCurrentIndex].classList.add("pac-man");
        pacDotEaten();
        powerPelletEaten();
        checkGameOver();
        checkForWin();
    }
    document.addEventListener("keyup", movePacman);
    // pacman eats pac dot
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++;
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove('pac-dot');
            squares[pacmanCurrentIndex].classList.add('background');
        }
    }

    // when you eat power pellet
    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10;
            ghosts.forEach(ghost => ghost.isScared = true);
            setTimeout(unScareGhosts, 10000);
            squares[pacmanCurrentIndex].classList.remove('power-pellet');
        }
    }
    // make ghosts change scared to not scared
    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false);
    }


    // create ghosts
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex - startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.timerId = NaN;
            this.isScared = false;
        }
    }
    ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ]

    // draw ghosts

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');
    });

    ghosts.forEach(ghost => moveGhost(ghost));


    //move the ghosts
    function moveGhost(ghost) {
        const directions = [-1, +1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];
        ghost.timerId = setInterval(function () {
            // if next square DOEN NOT CONTAIN wall or ghost
            if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
                //you can go there
                //remove all ghost related classes
                squares[ghost.currentIndex].classList.remove(ghost.className);
                squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');
                //change current index to new safe square
                ghost.currentIndex += direction;
                //redraw ghost in new safer space
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');



                // find new direction to go
            } else direction = directions[Math.floor(Math.random() * directions.length)];

            // if ghost is scared
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost');
            }
            // if ghost scared and pacman runs into it
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                ghost.currentIndex = ghost.startIndex;
                score += 100;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }
            checkGameOver();
        }, ghost.speed)
    }
    // check for game over
    function checkGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') && !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener("keyup", movePacman);
            // setTimeout(function () {
            //     alert('Game Over!')
            // }, 500);
            scoreDisplay.innerHTML = "GAME OVER";
        }
    }


    function checkForWin() {
        if (score === 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener("keyup", movePacman);
            scoreDisplay.innerHTML = 'YOU WON!';
        }
    }















})