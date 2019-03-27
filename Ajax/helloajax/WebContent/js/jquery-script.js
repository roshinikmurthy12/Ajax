$(document).ready(function() {
	
	$("button").click(function() {
		$.ajax({
			url : "http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=" + $("#count").val() + "&appid=4324c96edd9c1ec39f6acb3dc2e3457f"
		}).then(function(data) {
			console.log(data);
			$(data.list).each(function(index) {
				console.log(data.list[index].name)
				
			})
		})
	})
	
})