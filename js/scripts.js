var pokemonRepository = (function () { //wrapped repository Array inside IIFE
	var repository = [];
	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
		

	function loadList() {
	return fetch(apiUrl).then(function (response) {
		return response.json();
	}).then(function (json) {
		json.results.forEach(function (item) {
			var pokemon = {
			name: item.name,
			detailsUrl: item.url
			};
			add(pokemon);
		});
	}).catch(function (e) {
		console.error(e);
	})

	function loadDetails(item) {
		var url = item.detailsUrl;
		return fetch(url).then(function (response) {
		  return response.json();
		}).then(function (details) {
		  // Now we add the details to the item
		  item.imageUrl = details.sprites.front_default;
		  item.height = details.height;
		  item.types = Object.keys(details.types);
		}).catch(function (e) {
		  console.error(e);
		});
	 }


	function addListItem (pokemon) {
		var $pokemonList = document.querySelector('.pokemon-list');
		var $listItem = document.createElement ('li'); 
		var $listButton = document.createElement('button'); 
		$listButton.innerText = pokemon.name; 
		$listButton.classList.add('button-style'); 
		$listItem.appendChild($listButton);
		$pokemonList.appendChild($listItem); 
		$listButton.addEventListener('click', function(event) {
			showDetails(pokemon); //creatning the button as function/event to be able to click in the future
		});
	}

	function showDetails(item) {
		pokemonRepository.loadDetails(item).then(function() {
		console.log (item);
		});
	
	function add(item) {
		repository.push(item)
	}
	function getAll() {
		return repository;
	}

	return {
		add: add,
		getall: getall,
		search: search,
		loadList: loadList,
		loadDetails: loadDetails
	};
})();

pokemonRepository.loadList().then(function() {
	// Now the data is loaded!
	pokemonRepository.getAll().forEach(function(pokemon){
	  addListItem(pokemon);
	});
 });


//pokemonRepository.getall().forEach(function(pokemon){
	//document.write(pokemon.name + '<br>' + ' Height: ' + pokemon.height + ' Type: ' + pokemon.types + '<br>');

	//pokemonRepository.addListItem(pokemon);
	//var $listButton = document.querySelector(`.${pokemon.name}`);	
 //});