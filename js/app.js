const weather = new Weather('تهران', 'تهران');


document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('شیراز','فارس');

function getWeather(){
    weather.getWeather()
                  .then( result => console.log(result))
                  .catch(err =>console.log(err.message));
}



