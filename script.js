// const map= document.getElementById("map");
// const address= document.getElementById("addressResult");
// const location= document.getElementById("locationResult");
// const timeZone= document.getElementById("timezoneResult");
// const ips= document.getElementById("ipsResult");

fetch ("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_Q1W93GgsyMOvzD7pPuqC0zg2lyLLX&ipAddress=8.8.8.8")
.then ((response) => response.json())
.then ((json)=> console.log(json))

