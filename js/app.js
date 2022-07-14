const weather = new Weather('شیراز', 'فارس');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', changeLocation);

// weather.changeLocation('شیراز','فارس');

function changeLocation(){
  
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city,state);

  getWeather();

  $('#locationModal').modal('hide');

}


function getWeather(){
    weather.getWeather()
                  .then( result => {
                    console.log(result);
                    ui.paint(result, weather.location);
                  }
                        
                  )
                  .catch(err =>console.log(err.message));
}



