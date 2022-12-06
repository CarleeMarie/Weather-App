//let q = document.getElementById("#city");

fetch('//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c782cd09c599b5bcba01469e2f9d5529')
  .then(response => {
    return response.json();
})
.then(user=> {
    console.log(worked);
});


//API call for geocoding: 
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={c782cd09c599b5bcba01469e2f9d5529}

// q = city name
//appid = your API key
//limit = limit how many results show - optional

//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c782cd09c599b5bcba01469e2f9d5529

//call back: 
//https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={API key}