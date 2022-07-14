const weather = new Weather('شیراز', 'فارس');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('شیراز','فارس');

function getWeather(){
    weather.getWeather()
                  .then( result => {
                    console.log(result);
                    ui.paint(result, weather.location);
                  }
                        
                  )
                  .catch(err =>console.log(err.message));
}



