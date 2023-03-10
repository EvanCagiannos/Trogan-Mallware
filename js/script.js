/* Created by: Evan Cagiannos
   Created on: March 9th 2023
   This file contains the JS functions for index.html*/

   'use strict'

   /**
    * Check service worker.
    */
    if (navigator.serviceWorker) {
     navigator.serviceWorker.register("/MallWare/sw.js", {
       scope: "/Mallware/",
     })
   }
   
   /**
    * Finds the temperature using an API.
    */
    const getTemperature = async (URL) => {
     try {
       const result = await fetch(URL)
       const jsonData = await result.json()
       console.log(jsonData)
       const temperature = jsonData.main.temp - 273.15
       document.getElementById("current-weather").innerHTML = "<h5>The current weather is " + temperature.toFixed(0) + "°C</h5>"
     } catch (error) {
       console.log(error)
       document.getElementById("current-weather").innerHTML = "<h5>An error occured fetching the current weather.</h5>"
     }
   }
   
   getTemperature("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
