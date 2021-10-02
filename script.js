var weatherdata;
var requestUrl;

function init() {

}


function setData(cityName) {
    fetch(requestUrl + cityName, {
        method: 'GET', //GET is the default.
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          weatherdata.data;
        });
    
}

init();
$('#searchbtn').click(setdata($("#search").val()));
$('#atlanta').click(setdata("atlanta"));
$('#chicago').click(setdata("chicago"));
$('#newYork').click(setdata("newyork"));
$('#orlando').click(setdata("orlando"));
$('#sanFrancisco').click(setdata("sanfrancisco"));
$('#seattle').click(setdata("seattle"));
$('#denver').click(setdata("denver"));
$('#atlnata').click(setdata("atlanta"));
