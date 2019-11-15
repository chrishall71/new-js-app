var pokemonRepository = (function () { //wrapped repository Array inside IIFE
	var repository = [
		{
			name: 'Bulbasaur', 
			height: 2.4,
			types: ['grass', 'poison']
		},
		{
			name: 'Charmander', 
			height: 2.0,
			types: ['fire']
		},
		{
			name: 'Charizard', 
			height: 5.7,
			types: ['fire', 'flying']
		},
	];
	function add (pokemon) {
		repository.push (pokemon);
	}
//function to pull all Pokemon data
	function getall() {
		return repository;
	}

/*function addListItem(pokemon){
	var listItem = document.createElement('li');
	var button = document.createElement('button');
	$pokemonList.appendChild(listItem);
	button.innerText = pokemon.name;
	button.classList.add('new-style')
	listItem.appendChild(button);
 }*/

return {
	add: add,
	getAll: getAll,
	addlistItem: addlistItem
	};
})();

var $pokemonList = document.querySelector('ul');

pokemonRepository.getall ().forEach(function(pokemon){
		var listItem = document.createElement ('li')
		var button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('new-style');
		listItem.appendChild(button);
		$pokemonList.appendChild(listItem);
 });
