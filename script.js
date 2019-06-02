function Car(brand, model, year, km, color, kmPerYear) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.km = km;
    this.color = color;
}

Car.prototype.kmPerYear = function() {
    return (this.km / (2019-this.year));
}

var car1 = new Car("Toyota", "Corolla", 2018, 12000, "Blue", 15000);
var car2 = new Car("Suzuki", "Splash", 2010, 166000, "Turqoise", 17000);
var car3 = new Car("Nissan", "Juke", 2015, 40000, "Orange", 16000);

var cars = [];
cars.push(car1, car2, car3);
console.log(cars);

function highestKmPerYear(carsArr) {
    var max = 0;
    for (var i = 0; i <= cars.length - 2; i++) {
        (carsArr[i + 1].kmPerYear >= carsArr[i].kmPerYear) ? max = carsArr[i + 1].kmPerYear : max = carsArr[i].kmPerYear;
    }
    return max;
}

console.log("Highest Km per year: " + highestKmPerYear(cars));

