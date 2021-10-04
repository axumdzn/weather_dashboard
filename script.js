var weatherdata;
var APIKey = "4a3dc3901d5f6bf89db553e90f0442e3";
var cityName = 'Atlanta';
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
var queryURL7Day;
var cardEL = [$('#card1'),$('#card2'),$('#card3'),$('#card4'),$('#card5')];
function init() {

}


function setCity(city) {
  queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(queryURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          cityName = data.name;
          queryURL7Day = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat +"&lon=" + data.coord.lon + "&&appid=" + APIKey;
          console.log(queryURL7Day);
          setData();
        });
      }
function setData() {
    fetch(queryURL7Day)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          $('#mainInfo').text(cityName + " (" + moment.unix(data.current.dt).format("M/D/YYYY") + ") " + data.current.weather.icon);
        $('#mainTemp').text(((data.current.temp-273.15)*1.8)+32);
        $('#mainWind').text(data.current.wind_gust + "MPH");
        $('#mainHumidity').text(data.current.humidity + " %");
        $('#mainUV').text(data.current.uvi);

        for (let i = 1; i < 6; i++) {
          cardEL[i-1].children().eq(0).text(moment.unix(data.daily[i].dt).format("M/D/YYYY"));
          cardEL[i-1].children().children().eq(0).text(((data.daily[i].temp.day-273.15)*1.8)+32)
          cardEL[i-1].children().children().eq(1).text(data.daily[i].wind_speed)
          cardEL[i-1].children().children().eq(2).text(data.daily[i].uvi)
          
        }
        });
    
    
}

init();
setCity(cityName);
$('#searchbtn').on('click', setCity($("#search").val()));
$('#atlanta').on('click', setCity("atlanta"));
$('#chicago').on('click', setCity("chicago"));
$('#newYork').on('click', setCity("newyork"));
$('#orlando').on('click', setCity("orlando"));
$('#sanFrancisco').on('click', setCity("san_francisco"));
$('#seattle').on('click', setCity("seattle"));
$('#denver').on('click', setCity("denver"));
$('#atlnata').on('click', setCity("atlanta"));
