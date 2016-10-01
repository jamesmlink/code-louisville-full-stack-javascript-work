function addPokemon(data) {
  jsonDATA = data;
	$.each(data.results, function(i,pokemon) {	
		name = pokemon.name;
		$(`
					<li class="poke-card">
							<h3 class="name">${name}</h3>
					</li>
			`).appendTo('#pokemon');
		
	});
};

function movePrevious(data) {
	if (data.previous !== null) {
		$("#pokemon li").remove();
		$.getJSON(data.previous, addPokemon);
	};
};


function moveNext(data) {
	if (data.next !== null) {
		$("#pokemon li").remove();
		$.getJSON(data.next, addPokemon);
	};
};

// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.

var jsonDATA = [];
var pokemonAPI = "http://pokeapi.co/api/v2/pokemon/";


// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved. 

$.getJSON(pokemonAPI, addPokemon); 


// 2.)  Use jQuery to create a click handler for the next and previous buttons.

// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.  
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.  

$("#previous").click(function() {
	movePrevious(jsonDATA);
});


$("#next").click(function() {
	moveNext(jsonDATA);
});


/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

    Be creative, you can style/arrange the detail information however you like! 
*/

