ht.Templates.LobbyGamesListTemplate = _.template(''+
  '<div class="section-container accordian" data-section="accordian">'+
    '<% for(var i = 0; i < games.length; i++) { %>'+
      '<section>'+
        '<p class="title game" data-section-title><i class="icon-reorder menu-icon"></i>| <%= games[i].title %><i class="icon-chevron-right right-icon"></i></p>'+
        '<div class="content" data-section-content>'+
          '<ul class="no-bullet">'+
            '<li>Prompt: <%= games[i].prompt %></li>'+
            '<li>Judge: <%= games[i].judge %></li>'+
            '<li>Players:</li>'+
            // '<% for(var j = 0; j < games[i].players.length; j++) { %>'+
            //   '<li>games.[i].players[j].username</li>'+
            // '<% } %>'+
            '<li><a href="/#game/<%= games[i]._id %>">Play!</a></li>'+
          '</ul>'+
        '</div>'+
      '</section>'+
    '<% } %>'+
  '</div>'+
'');