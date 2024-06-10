
// Tableau pour stocker l'état du plateau de jeu
let board = ['', '', '', '', '', '', '', '', ''];

// Variable pour suivre le joueur actuel (X ou O)
let currentPlayer = 'X';

// Variable pour vérifier si le jeu est terminé
let gameOver = false;



// selectionner les cells du jeu
const cells = document.querySelectorAll('.cell')

// boucle sur chaque cell pour ajouter un ecouteur d'évènement
cells.forEach((cell, index) =>
    cell.addEventListener('click', () => {
        // verifier si la cellule est vide et que le jeu n'est pas terminé
        if(board[index] == "" && gameOver == false) {
            // mettre a jour le gameboard
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;

            // Vérifier si un joueur a gagné ou si c'est une partie nulle
            // checkWinner();


            // Changer de joueur
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    })
);

