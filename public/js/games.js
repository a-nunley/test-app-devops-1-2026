function loadGames() {

  $.get('/api/games', function(games) {

    let html = '';

    games.forEach(game => {

      html += `
      <div class="card mb-2">
        <div class="card-body">

        <b>${game.gameName}</b>

        <br>

        <a href="${game.gameURL}" target="_blank">${game.gameURL}</a>

        <br>

        Author: ${game.gameAuthor}

        <br><br>

        <button onclick="deleteGame('${game._id}')" class="btn btn-danger btn-sm">
        Delete
        </button>

        </div>
      </div>
      `;
    });

    $('#gamesList').html(html);
  });
}

$('#gameForm').submit(function(e){

  e.preventDefault();

  const game = {
    gameName: $('#gameName').val(),
    gameURL: $('#gameURL').val(),
    gameAuthor: $('#gameAuthor').val()
  };

  $.ajax({
    url:'/api/games',
    method:'POST',
    contentType:'application/json',
    data:JSON.stringify(game),
    success:function(){

      $('#gameForm')[0].reset();
      loadGames();
    }
  });

});

function deleteGame(id){

  $.ajax({
    url:'/api/games/'+id,
    method:'DELETE',
    success:function(){
      loadGames();
    }
  });

}

$(document).ready(function(){
  loadGames();
});