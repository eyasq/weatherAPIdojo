const temps = document.querySelectorAll('.temperature')
const tempDisplay = document.querySelector('#temp')
const currTemp = async (unit = 'C', city = 'San+Jose')=>{
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=bc6bab9c51fc4a02a5f142058242512&q=${city}&aqi=no`)
    const weatherCond = res.data.current.condition.text
    var currWeatherCond = document.querySelector('#currWeatherCond')
    var currentTemp = document.querySelector('#currentTemp')
    currWeatherCond.innerText = weatherCond
    if(unit == 'C'){
        const tempC = Math.round(res.data.current.temp_c)
        currentTemp.innerText = `${tempC} °C - `
    }
    else if(unit == 'F'){
        const tempF = Math.round(res.data.current.temp_f)
        currentTemp.innerText = `${tempF} °F - `
}}

currTemp()
tempDisplay.addEventListener('change',()=>{
    if(tempDisplay.value =='C'){
        temps.forEach((temp)=>{
            var cTemp = ((parseInt(temp.innerText))-32)/1.8;
            temp.innerText = Math.round(cTemp)
            })
            currTemp('C')
        }
    else{
        temps.forEach((temp)=>{
            var fTemp = ((parseInt(temp.innerText))*1.8)+32;
            temp.innerText = Math.round(fTemp)
        })
        currTemp('F')

    }
})

var chicago = document.querySelector('#chicago')
var dallas = document.querySelector('#dallas')
var burbank = document.querySelector('#burbank')
var cities = document.querySelectorAll('.cities')
var currentCity = document.querySelector('#currCityDisplay')
cities.forEach((city)=>{
    city.addEventListener('click',()=>{
        if(city.id == 'chicago'){
            currTemp('C','Chicago')
            currentCity.innerText = 'Chicago'
        }
        else if(city.id == 'dallas'){
            currTemp('C','Dallas')
            currentCity.innerText =  'Dallas'
        }
        else if(city.id == 'burbank'){
            currTemp('C','Burbank')
            currentCity.innerText = 'Burbank'
        }
    })
})








