//To Convert to ML

var convertTeaspoon = function () {
  var teaspoon = prompt("How many teaspoons?");
  // console.log(typeof(teaspoon));
  var metricUnit = teaspoon / .20288;
  alert(metricUnit.toFixed(3));
}
convertTeaspoon();

var convertTablespoon = function () {
  var tablespoon = prompt("How many tablespoons?");
  var metricUnit = tablespoon / .067628;
  alert(metricUnit.toFixed(3));
}

convertTablespoon();

var convertCup = function () {
  var cup = prompt("How many cups?");
  var metricUnit = cup / .0042268;
  alert(metricUnit.toFixed(3));
}

convertCup();


//To Convert to Liters

var convertPint = function () {
  var pint = prompt("How many pints?");
  var metricUnit = pint / 2.1134;
  alert(metricUnit.toFixed(3));
}

convertPint();

var convertQuart = function () {
  var quart = prompt("How many quarts?");
  var metricUnit = quart / 1.0567;
  alert(metricUnit.toFixed(3));
}

convertQuart();


var convertGallon = function () {
  var gallon = prompt("How many gallons?");
  var metricUnit = gallon / .26417;
  alert(metricUnit.toFixed(3));
}

convertGallon();
