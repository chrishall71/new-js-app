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

	function addListItem (pokemon) {
		var $pokemonList = document.querySelector('.pokemon-list');

		
		var $listItem = document.createElement ('li'); //create a li element that contains a button for each Pokemon
		var $listButton = document.createElement('button');  //creates the button element
		$listButton.innerText = pokemon.name; //set the innerText of the burtton to be the pokemons name
		$listButton.classList.add('button-style'); //Add a class tot he button using the classList.add method
		
		$listItem.appendChild($listButton);	//append the button to the list item as its child.
		$pokemonList.appendChild($listItem); //append the child in the repository
		$listButton.addEventListener('click', function(event) {
			showDetails(pokemon); //creatning the button as function/event to be able to click in the future
		});
	}
		function showDetails(pokemon) {
			console.log (pokemon);
		}

	return {
		add: add,
		getall: getall,
		addListItem: addListItem
	};
})();

pokemonRepository.getall().forEach(function(pokemon){
	//document.write(pokemon.name + '<br>' + ' Height: ' + pokemon.height + ' Type: ' + pokemon.types + '<br>');

	pokemonRepository.addListItem(pokemon);
	var $listButton = document.querySelector(`.${pokemon.name}`);	
 });