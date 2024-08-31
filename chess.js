// script.js
document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.getElementById("chessboard");
    const pieces = [
        ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"], 
        ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"], 
        ["", "", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"], 
        ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"] 
    ];
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            if ((row + col) % 2 === 0) {
                square.className = "square white";
            } else {
                square.className = "square black";
            }
            square.textContent = pieces[row][col];
            chessboard.appendChild(square);
        }
    }
});

