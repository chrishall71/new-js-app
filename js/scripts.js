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

/*for (var i = 0; i < repository.length; i++) {
	document.write ('<br>' + repository[i].name, ':'+'&nbsp &nbsp ' + ' Height:  ', repository[i].height);
if (repository[i].height > 5) {
	document.write ( ' -  Wow, that is Big! ');
	}
 }*/
 
 document.write ('<h3> Pokemon Names</h3>');

 Object.keys(repository).forEach(function(property) {
	document.write(repository[property].name + '<br>' + ' Height: ' + repository[property].height + '<br>' + ' Type: ' + repository[property].types + '<br><br>');
 });
