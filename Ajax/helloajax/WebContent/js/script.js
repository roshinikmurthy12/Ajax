function sayhello(){
		
		var request = init();
		var name = document.getElementById("myname").value;;
		request.open("GET","hello.jsp?name=" + name, true);
		request.send();
		request.onreadystatechange = processResponse;
		
		function processResponse() {
			if(request.status == 200 && request.readyState == 4) {
				var temp = request.responseText
				console.log(temp);
				var divTag = document.getElementById("content");
			divTag.innerHTML = temp;
			divTag.style.background = "yellow";
			}
		}
		
	
	}

	function init() {
		var httpRequest = null;
		
		if(window.XMLHttpRequest){  
			httpRequest=new XMLHttpRequest();  
			}  
			else if(window.ActiveXObject){  
			httpRequest=new ActiveXObject("Microsoft.XMLHTTP");  
			}  
		return httpRequest;
	}
	
function getForecast() {
	var request = init();
	var count = document.getElementById("count").value;;
	request.open("GET","http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=" + count + "&appid=4324c96edd9c1ec39f6acb3dc2e3457f", true);
	request.send();
	request.onreadystatechange = processForecast;
	
	function processForecast() {
		if(request.status == 200 && request.readyState == 4) {
			var data = JSON.parse(request.responseText);
			var arr = data.list;
			console.log(data);
			var divTag = document.getElementById("forecast");
			for(var i=0;i<arr.length;i++) {
				console.log(arr[i].name);
				console.log(arr[i].main.temp_min + ", " + arr[i].main.temp_max);
				console.log(arr[i].weather[0].description);
				console.log("----------------");
			}
			
		}
	}
	
}