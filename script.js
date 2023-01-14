const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f87fb800dmsh36b3524cc6519f5p1dbef0jsnbc9366078514',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));