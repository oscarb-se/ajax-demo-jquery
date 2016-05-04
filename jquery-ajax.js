// JavaScript 

// Använd jQuery och AJAX

/*
  Övningar:
  * Lägg till så att en funktin körs vid error
  * Vad händer för olika URL:s?
  * Lägg till i HTML-filen så att man kan mata in två tal, använd sedan dessa för att anropa ditt API på RapidAPI.com från igår!

*/

$('#my-button').click(function() { 
  console.log("Knappen klickades på!") 
  
  // Gör en GET request med AJAX i jQuery
  
  // GitHub Zen API: https://api.github.com/zen
  // http://mardby.se/AJK15G/lorem_text.php
  $.get("http://mardby.se/AJK15G/lorem_text.php", function(data, textStatus, jqXHR) {
    // Vilken status?
    console.log(textStatus);
    console.log(jqXHR);
    
    // Visa texten från servern i stycket (<p>) med id:t show-server-text
    $('#show-server-text').text(data);
    
  } ).fail(function(jqXHR, errorStatus, errorThrown) { 
    console.log("Request gav fel!");
    console.log("jqXHR:" + jqXHR);
    console.log("errorStatus: " + errorStatus);
    console.log("errorThrown: " + errorThrown)
    
    
  }
)
} 
);


// Klicka på Spotify-knappen
$('#spotify-button').click(function() { 
  
  // Gör en request med jQuery mot Spotify's API
  var url = "https://api.spotify.com/v1/users/tuggareutangranser";
  
  $.get(url, function(data, textStatus, jqXHR) {
    
    // Placera vårt svar på vår hemsida
    $('#spotify-response').text(data);
    
  })
  
});


