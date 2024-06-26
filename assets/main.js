
// Tableau pour stocker l'état du plateau de jeu
let board = ['', '', '', '', '', '', '', '', ''];

// Variable pour suivre le joueur actuel (X ou O)
let currentPlayer = 'X';

// Variable pour vérifier si le jeu est terminé
let gameOver = false;

// variables icons
const xIconPath ="assets/icons/lettre-x.png"
const oIconPath ="assets/icons/lettre-o.png"

// initialiser les scores
let scoreX = 0 
let scoreO = 0 

// selectionner les cells du jeu
const cells = document.querySelectorAll('.cell')

// boucle sur chaque cell pour ajouter un ecouteur d'évènement
cells.forEach((cell, index) =>
    cell.addEventListener('click', () => {
        // verifier si la cellule est vide et que le jeu n'est pas terminé
        if(board[index] == "" && gameOver == false) {
            const iconElement = document.createElement('img')

            // Utiliser les variables pour définir le chemin d'accès à l'image
            if (currentPlayer === 'X') {
                iconElement.src = xIconPath;
            } else {
                iconElement.src = oIconPath;
            }

            iconElement.alt = currentPlayer;
            iconElement.classList.add("icon");

            cell.appendChild(iconElement)

            // mettre a jour le gameboard
            board[index] = currentPlayer;
            // cell.textContent = currentPlayer;

            // Changer de joueur
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            // Vérifier si un joueur a gagné ou si c'est une partie nulle
            checkWinner();
        }
    })
);

// tableau des combinaison gagnant 
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonnes
    [2, 4, 6], [0, 4, 8] // diagonales
];


// selectionner le resultat d'un jeu
const resultElement = document.querySelector(".result")

function checkWinner() {
    let  winner = null // variables pour stoké le gagnant 
    // vérifier que les combinaisons gagnante pour le joueur 'X'
    for (let combination of winningCombinations) {
        if(
            board[combination[0]] === 'X' &&
            board[combination[1]] === 'X' &&
            board[combination[2]] === 'X' 
        ) {
            winner = 'X'
            resultElement.textContent = 'le joueur X a gagné !';
            scoreX++;
            console.log('x=', scoreX);
            updateScore();
            gameOver = true;
            return;
        };
    };

    // vérifier que les combinaisons gagnante pour le joueur 'O'
    for (let combination of winningCombinations) {
        if(
            board[combination[0]] === 'O' &&
            board[combination[1]] === 'O' &&
            board[combination[2]] === 'O' 
        ) {
            winner = 'O'
            resultElement.textContent = 'le joueur O a gagné !'
            scoreO++;
            console.log("O=", scoreO);
            updateScore();
            gameOver = true;
            return;
        };
    };
    
    // vérifier si une partie est null
    if (!board.includes('')) {
        winner = null
        resultElement.textContent = 'la partie est nulle'
        gameOver = true  
    };
    };
    
    // afficher le score du gagnant de la partie
    const scoreXElement = document.getElementById('scoreX')
    const scoreOElement = document.getElementById('scoreO')
    console.log(scoreX, scoreO)
    console.log(scoreXElement, scoreOElement)
    
    
    function updateScore() {
        scoreXElement.textContent = scoreX
        scoreOElement.textContent = scoreO
    }
        
/** gerer la partie suivante du jeu et la mise a zero du jeu **/    
const nextGame = document.querySelector('.nextgame')
const newGame = document.querySelector('.newgame')


function gameReset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    resultElement.textContent = '';
    cells.forEach(cell => cell.textContent = '');
};


function scoreReset() {
    gameReset();
    scoreX = 0;
    scoreO = 0;
    updateScore();
};
        
nextGame.addEventListener('click', gameReset);
newGame.addEventListener('click', scoreReset);
