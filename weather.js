$(document).ready(function(){
    $("#choose-city").change(function () { 
        var city = this.value;
        requestWeather(city, function (data) {   
            if (data && data.main) {
                $("#temp-value").text(Math.round(data.main.temp-273));
                $("#humidity-value").text(data.main.humidity);
                $("#pressure-value").text(Math.round(data.main.pressure*0.0075*100));
                $("#show-weather").show();
            };
        });    
    });
});
function requestWeather(city, callback) {
    $.get ("http://api.openweathermap.org/data/2.5/weather",
        {
            "q" : city,
            "appid" : "aa1323ab8357678b584fc7c2c0fc1bb5",
            
        }, callback);
    
};