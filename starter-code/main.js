fetch('data.json')
.then(resp => {
	return resp.json();
})
.then(json =>{
	$('.imageDestination').attr('src', json.destinations[1].images.png);
	$('.destinationItem').click((event) => {
		for (let i = 0; i < json.destinations.length; i++) {
			if(event.target.innerHTML == json.destinations[i].name){
				$('.title').text(json.destinations[i].name);
				$('.descrition').text(json.destinations[i].description);
				$('.distance').text(json.destinations[i].distance);
				$('.travel').text(json.destinations[i].travel);
				$('.imageDestination').attr('src', json.destinations[i].images.png);
		}
	}
	});

	
	$('.role').text(json.crew[0].role);
	$('.name').text(json.crew[0].name);
	$('.bio').text(json.crew[0].bio);
	$('.imageCrew').attr('src', json.crew[0].images.png);
	$('.balls>div').click(function(event) {
		let elementoClicado = $(this).attr('id');
		for (var i = 0; i < json.crew.length; i++) {
			if(elementoClicado == json.crew[i].role){
				$('.role').text(json.crew[i].role);
				$('.name').text(json.crew[i].name);
				$('.bio').text(json.crew[i].bio);
				$('.imageCrew').attr('src', json.crew[i].images.png);
			}
		}
						
	});
	$('.imageTechnology').attr('src', json.technology[0].images.portrait);
	$('.nameTechnology').text(json.technology[0].name);

	$('.espaco').click(function(event) {
		let elementoTechnologyClicado = event.target.innerHTML;
		if(elementoTechnologyClicado == 1){
			$('.nameTechnology').text(json.technology[0].name);
			$('.imageTechnology').attr('src', json.technology[0].images.portrait);
			$('.description').text(json.technology[0].description);
		}else if(elementoTechnologyClicado == 2){
			$('.nameTechnology').text(json.technology[1].name);
			$('.imageTechnology').attr('src', json.technology[1].images.portrait);
			$('.description').text(json.technology[1].description);
		}else if(elementoTechnologyClicado == 3){
			$('.nameTechnology').text(json.technology[2].name);
			$('.imageTechnology').attr('src', json.technology[2].images.portrait);
			$('.description').text(json.technology[2].description);
		}
	});

})

