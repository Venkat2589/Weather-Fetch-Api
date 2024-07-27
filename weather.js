const api="a8d2486834a09f562867a88abffb8563";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbt = document.querySelector(".search button");
const icon = document.querySelector(".icon");

async function checkweather(city){
    const response = await fetch(url+city+`&appid=${api}`);
    if(response.status == 404)
    {
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
        if(data.weather[0].main=="Clouds")
        {
            icon.src = "clouds.png";
        }else if(data.weather[0].main=="Clear")
        {
            icon.src = "clear.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            icon.src = "rain.png";
        }
        else if(data.weather[0].main=="Drizzle")
        {
            icon.src = "drizzle.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            icon.src = "mist.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display ="none";
    }
   
}

searchbt.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
