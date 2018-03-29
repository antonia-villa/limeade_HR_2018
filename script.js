var data = [{
	"name": "Shadow",
	"type": "Cat",
	"breed": "Shorthair",
	"gender": "F",
	"description": "Grey cat with sass",
	"location": "Issaquah, WA",
	"properties": {
		"price": 25.50,
		"is_vaccinated": true,
		"birth_date": "2012-02-23",
		"attributes": {
			"fur": "short",
			"color": "grey",
			"eyes": "green"
		}
	},
	"tags": ["kid friendly", "quiet", "shy"]
}, {
	"name": "Rex",
	"type": "Dog",
	"breed": "Boxer",
	"gender": "M",
	"description": "Puppy with potential",
	"location": "Seattle, WA",
	"properties": {
		"price": 200,
		"is_vaccinated": true,
		"birth_date": "2017-01-23T12:00:00.000Z",
		"attributes": {
			"fur": "short",
			"color": "orange",
			"eyes": "green"
		}
	},
	"tags": ["puppy", "affectionate", "kid friendly"]
}, {
	"name": "Tiger",
	"type": "Cat",
	"breed": "Tabby",
	"gender": "F",
	"description": "Older cat with patience",
	"location": "Seattle, WA",
	"properties": {
		"price": 25,
		"is_vaccinated": true,
		"birth_date": "2011-05-13T12:00:00.000Z",
		"attributes": {
			"fur": "long",
			"color": "orange",
			"eyes": "green"
		}
	},
	"tags": ["affectionate", "kid friendly"]
}, {
	"name": "Joe",
	"type": "Cat",
	"breed": "Siamese",
	"gender": "M",
	"description": "Kitten with voice",
	"location": "Bellevue, WA",
	"properties": {
		"price": 135,
		"is_vaccinated": true,
		"birth_date": "2017-01-11T12:00:00.000Z",
		"attributes": {
			"fur": "short",
			"color": "white",
			"eyes": "grey"
		}
	},
	"tags": ["vocal", "ornery"]
}, {
	"name": "Josie",
	"type": "Cat",
	"breed": "Tabby",
	"gender": "F",
	"description": "Kitten",
	"location": "Bellevue, WA",
	"properties": {
		"price": 80,
		"is_vaccinated": false,
		"birth_date": "2017-01-31T12:00:00.000Z",
		"attributes": {
			"fur": "short",
			"color": "black",
			"eyes": "blue"
		}
	},
	"tags": ["quiet", "shy"]
}, {
	"name": "Joseph",
	"type": "Dog",
	"breed": "Welsh Corgi",
	"gender": "M",
	"description": "Loyal Corgi",
	"location": "Bellevue, WA",
	"properties": {
		"price": 280,
		"is_vaccinated": true,
		"birth_date": "2012-08-10T12:00:00.000Z",
		"attributes": {
			"fur": "medium",
			"color": "orange and white",
			"eyes": "brown"
		}
	},
	"tags": ["lap dog", "vocal"]
}, {
	"name": "Jor",
	"type": "Dog",
	"breed": "German Shepherd",
	"gender": "M",
	"description": "Puppy that needs training",
	"location": "Bothell, WA",
	"properties": {
		"price": 320,
		"is_vaccinated": true,
		"birth_date": "2016-12-10T12:00:00.000Z",
		"attributes": {
			"fur": "medium",
			"color": "black",
			"eyes": "brown"
		}
	},
	"tags": ["chews", "active", "kid friendly"]
}, {
	"name": "Jon Jon",
	"type": "Cat",
	"breed": "Tabby",
	"gender": "M",
	"description": "Older lap cat",
	"location": "Kirkland, WA",
	"properties": {
		"price": 22,
		"is_vaccinated": true,
		"birth_date": "2009-11-10T12:00:00.000Z",
		"attributes": {
			"fur": "short",
			"color": "black and white",
			"eyes": "green"
		}
	},
	"tags": ["sleeps", "quiet", "kid friendly"]
}, {
	"name": "Janie",
	"type": "Dog",
	"breed": "Poodle",
	"gender": "F",
	"description": "Well trained companion",
	"location": "Kirkland, WA",
	"properties": {
		"price": 220,
		"is_vaccinated": true,
		"birth_date": "2015-11-10T12:00:00.000Z",
		"attributes": {
			"fur": "short",
			"color": "white",
			"eyes": "black"
		}
	},
	"tags": ["trained", "obedient", "kid friendly"]
}]

var myPets = {};
myPets.pets = data;




$('#pet-search').keypress(function() {
	if($('#results-list')){
		$('#results-list').remove()
	}
	var input = $("#pet-search")
    var filter = input.val().toLowerCase();
    var results = retrieveResults(filter);
    addSearchResults(results)
})

// $(function(){


// 	$('.petLink').click(function(e){
// 	e.preventDefault();
// 	$("#details").css('display', 'block')
// 	var p = document.createElement('p')
// 	p.textContent = 'test'
// 	console.log(event.target.id)
// 	$('#details').append(p)
// })
// })


function retrieveResults(filter){
	var results = []
	for(var i=0; i<data.length; i++){
		var exp = new RegExp((filter.toLowerCase()), 'g');
	    if((data[i].name.toLowerCase()).match(exp)){
	      results.push(data[i].name)
	    }
	}
	return results;
}

function showDetails(e){
	e.preventDefault();
	var pet = document.createElement('p')
	pet.textContent = e.target.id
	$('#details').append(pet)
	console.log(e.target.id)
}

function addSearchResults(results){
	$('#output').css('display', 'block');

	var ul = document.createElement('ul');
	$(ul).attr('id', 'results-list');
	$('#output').append(ul)
	
	for(var i=0; i<results.length; i++){
		var li = document.createElement('li');
		var petName = document.createElement('a')

		petName.textContent = results[i]
		$(petName).attr('class', 'petLink')
		$(petName).attr('id', results[i])
		$(petName).attr("href", "#")
		$(petName).click(showDetails); 
		$('#results-list').append(li)
		$(li).append(petName);
	}
}