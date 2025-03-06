
//generate your own API key from openweather.org and use it in the apikey variable.
//url may change so make sure to check the openweather api documentation for the latest url.
//use your own API key and endpoint to get the data from openweather.

  const apikey = "";
  const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


  const temp = document.getElementById("temp");
  const cityName = document.getElementById("CityName");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  const weather = document.getElementById("Weather-icon");
  const searchinp = document.getElementById("search-inp");
  const searchbtn = document.getElementById("search-btn");
  const displayError = document.getElementById("error");
const main = document.querySelector(".main");
 
  async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
      var data = await response.json();
      console.log(data);

     if(data.cod =="404") {
      displayError.innerHTML = data.message;
      displayError.style.display = "block";
      main.style.display = "none";
     } else {
       main.style.display ="block"; 
       displayError.style.display = "none"; 
       cityName.innerHTML = data.name;
       temp.innerHTML = Math.round(data.main.temp)+"°c";
       humidity.innerHTML = data.main.humidity + " %";
       wind.innerHTML = data.wind.speed + " km/h";
 
       if(data.weather[0].main == "clear") {
         weather.src = "images/clear.png";
       } else if(data.weather[0].main == "Clouds"){
         weather.src = "images/clouds.png";
       } else if(data.weather[0].main == "drizzle"){
         weather.src = "images/drizzle.png";
       }else if(["Haze","Mist","Fog"].includes(data.weather[0].main)){
         weather.src = "images/mist.png";
       } else if(data.weather[0].main == "rain") {
         weather.src = "images/rain.png";
       }else if(data.weather[0].main == "snow"){
         weather.src = "images/snow.png";
       } 
     }  
     } 

  searchbtn.addEventListener("click",() => {
    checkWeather(searchinp.value);
   });
