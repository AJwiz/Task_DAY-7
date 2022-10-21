// DAY 7 TASK USING FILTER / REDUCE / FOR EACH FUNCTIONS

var request = new XMLHttpRequest(); // NEW HTML REQUEST 

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    var mrft = JSON.parse(request.response);
    //console.log(mrft);
// Get all the countries from the Asia continent /region using the Filter function
    var cr = mrft.filter((ele)=>ele.region =="Asia").map((ele)=>ele.name.common);
    console.log(cr);
// Get all the countries with a population of less than 2 lakhs using Filter function
    var popu = mrft.filter((ele)=>ele.population < 200000).map((ele)=>ele.name.common);
    console.log(popu);
// Print the following details name, capital, flag using forEach function
   mrft.forEach((ele)=>console.log (`Name:${ele.name.common},Capital:${ele.capital},Flag:${ele.flag})`));
    
// Print the total population of countries using reduce function
    var totalPopulation= mrft.reduce((acc,cv)=>acc+cv.population,0);
    console.log(totalPopulation);

// Print the country which uses US Dollars as currency
    var usd = mrft.filter((ele)=>(ele.currencies!=undefined && ele.currencies["USD"])).map((ele)=>ele.name.common);
    console.log(usd);
  };
