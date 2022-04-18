var movies = ['That Thing You Do', 'Harry Potter', 'Cry Baby', 'Lord of the rings fellowship of the ring', 'Fried Green Tomatoes', 'No Country for Old Men', 'Face-off', 'Chinatown', 'The Other Guys', 'Blade Runner', "Something's gotta give", 'Titanic', 'The Matrix', 'The Incredibles', 'Stand By Me', 'Cruel Intentions', 'John Wick', 'Elf', 'Superbad', "A Knight's Tale", "Kiki's Delivery Service", "10 Things I Hate About You", "Good Burger", 'Moulin Rouge', 'Porco Rosso', 'Little Shop of Horrors', '3 Idiots', "Rain Man", "Eternal Sunshine of the Spotless Mind", "Spirited Away", 'Galaxy Quest', "Empire Strikes Back", 'Empire Records', 'Luca', 'Terminator', 'Flash Gordon']

function randomMovie () {
 var movieValue =  Math.floor(Math.random() * movies.length);
 var theMovie = movies[movieValue];
 console.log(theMovie);
}

randomMovie ();
