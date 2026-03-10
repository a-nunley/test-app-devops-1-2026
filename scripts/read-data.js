$("#loadDataBtn").click(function () {
    $.getJSON("/api/game", function (result) {
        $("#output").html(`
            <h3>${result.gameName}</h3>
            <p><strong>Author:</strong> ${result.gameAuthor}</p>
            <p><strong>Repository:</strong> <a href="${result.gameURL}" target="_blank">${result.gameURL}</a></p>
        `);
    }).fail(function () {
        $("#output").html(`<p class="text-danger">Failed to load game data.</p>`);
    });
});