// user goes to site, enters name.  player object is created with name  & variables id, wins, losses. 

// after input, lobby appears, players avail to challenge are listed.  lobby has chat

// once game starts, both players are assigned to game. selection is made 

// checkWin method called and wins/losses are assigned

// game ends, new game starts or return to lobby


$(window).on('load', function () {
    $('#createPlayerModal').modal('show')
});



var database = firebase.database();

var name = "";
var id = "";
var wins = 0;
var losses = 0;
var playersArr = []

$('#submitButton').on('click', function () {
    event.preventDefault();

    name = $("playerName").text();
    id = firebase.database.length++;
    wins = 0;
    losses = 0;

    database.ref().push({
        name: name,
        id: id,
        wins: wins,
        losses: losses,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $('#createPlayerModal').modal('hide');

});



// for (i = 0; i < player.length; i++) {
//     database.ref().push(player[i]);
// }


//========================= player object ============================
// store name (input by user),  ID, wins, losses
// buildPlayer method



// ========================= game object ========================= 
// 2 players, 2 choices 
// buildGame method





