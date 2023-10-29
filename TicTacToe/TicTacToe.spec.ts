/*
    Tic Tac Toe
    About this kata

    Like many game kata, it’s a good introduction to double loop TDD or BDD.
    Rules

    The rules of the tic tac toe game are the following:

    a game is over when all fields are taken
    a game is over when all fields in a column are taken by a player
    a game is over when all fields in a row are taken by a player
    a game is over when all fields in a diagonal are taken by a player
    a player can take a field if not already taken
    players take turns taking fields until the game is over
    there are two player in the game (X and O)

    -------------------------------------------------------------------

    Morpion
    À propos de ce kata

    Comme de nombreux katas de jeux, c'est une bonne introduction à la TDD (Test-Driven Development) à double boucle ou au BDD (Behavior-Driven Development).
    Règles

    Les règles du jeu du morpion sont les suivantes :

    Une partie est terminée lorsque tous les champs sont pris.
    Une partie est terminée lorsque tous les champs d'une colonne sont pris par un joueur.
    Une partie est terminée lorsque tous les champs d'une ligne sont pris par un joueur.
    Une partie est terminée lorsque tous les champs d'une diagonale sont pris par un joueur.
    Un joueur peut prendre un champ s'il n'est pas déjà pris.
    Les joueurs se relaient pour prendre des champs jusqu'à ce que la partie soit terminée.
    Il y a deux joueurs dans le jeu (X et O).

*/

import { Game } from "./TickTacToe";



test('a game is over when all fields are taken', () => {
    var game = new Game(
    [["X","O","X"]
    ,["O","O","X"]
    ,["X","X","O"]]);
    expect(game.isOver()).toBe(true);
    var game = new Game(
    [[" "," "," "]
    ,[" "," "," "]
    ,[" "," "," "]]);
    expect(game.isOver()).toBe(false);    
});

test('a game is over when all fields in a column are taken by a player', () => {
    var  game = new Game(
    [["X"," "," "]
    ,["X"," "," "]
    ,["X"," "," "]]
    );
    expect(game.isOver()).toBe(true);
    var  game = new Game(
    [["X"," "," "]
    ,["O"," "," "]
    ,["X"," "," "]]
    );
    expect(game.isOver()).toBe(false);
    var  game = new Game(
    [[" "," ","0"]
    ,[" "," ","0"]
    ,[" "," ","0"]]
    );
    expect(game.isOver()).toBe(true);
    var  game = new Game(
    [[" "," ","0"]
    ,[" "," ","X"]
    ,[" "," ","0"]]
    );
    expect(game.isOver()).toBe(false);
});
test('a game is over when all fields in a row are taken by a player', () => {
    var  game = new Game(
    [[" "," "," "]
    ,[" "," "," "]
    ,["X","X","X"]]
    );
    expect(game.isOver()).toBe(true);
    var  game = new Game(
    [[" "," "," "]
    ,[" "," "," "]
    ,["O","X","X"]]
    );
    expect(game.isOver()).toBe(false);
    var  game = new Game(
    [["O","O","O"]
    ,[" "," "," "]
    ,[" "," "," "]]
    );
    expect(game.isOver()).toBe(true);     
    var  game = new Game(
    [["O","O","X"]
    ,[" "," "," "]
    ,[" "," "," "]]
    );
    expect(game.isOver()).toBe(false);      
});

test('a game is over when all fields in a diagonal are taken by a player', () => {
    var  game = new Game(
    [[" "," ","X"]
    ,[" ","X"," "]
    ,["X"," "," "]]
    );
    expect(game.isOver()).toBe(true);
    var  game = new Game(
    [["O"," "," "]
    ,[" ","O"," "]
    ,[" "," ","O"]]
    );
    expect(game.isOver()).toBe(true);      
});

test("a player can take a field if not already taken", () => {
    var  game = new Game(
        [[" "," "," "]
        ,[" "," "," "]
        ,[" "," "," "]]
        );
    var possiblePlayPositions = game.getPossiblePlayPositions(); 
    expect(possiblePlayPositions.length).toBe(9);
    game.play(possiblePlayPositions[0]);
    var possiblePlayPositions = game.getPossiblePlayPositions();
    expect(possiblePlayPositions.length).toBe(8);

    var game = new Game(
        [["X","O","X"]
        ,["O","O","X"]
        ,["X"," ","O"]]);
    var possiblePlayPositions = game.getPossiblePlayPositions(); 
    expect(possiblePlayPositions[0].x).toBe(2);
    expect(possiblePlayPositions[0].y).toBe(1);

});

test("players take turns taking fields until the game is over",() => {
    var  game = new Game(
        [[" "," "," "]
        ,[" "," "," "]
        ,[" "," "," "]]
        );
    var possiblePlayPositions = game.getPossiblePlayPositions();
    var joueur1 = game.currentPlayer(); 
    game.play(possiblePlayPositions[0])
    var joueur2 = game.currentPlayer();
    game.play(possiblePlayPositions[1])
    var joueur3 = game.currentPlayer();
    expect(joueur1).not.toEqual(joueur2);
    expect(joueur1).toEqual(joueur3);
   
});

