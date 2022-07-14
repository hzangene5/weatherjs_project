class Weather {
    constructor(city , state){
        this.apikey = '9a8f9b70af18aa2c693611d78be40c25',
        this.city = city,
        this.state = state
    }
  
     async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`);

        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }else{
            throw Error(response.status);
        }

    }

    changeLocation(city, state){
        this.city = city,
        this.state = state
    }


    get location(){
        return this.state +  ' , ' + this.city;
    }

    

}


























































// 9a8f9b70af18aa2c693611d78be40c25
// 86b0bd9b76517148d71f0967cc7de574