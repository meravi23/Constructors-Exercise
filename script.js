function Car(brand, model, year, km, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.km = km;
    this.color = color;
}

Car.prototype.kmPerYear = function() {
    var avgKm = (this.km / (2019-this.year));
    return avgKm;
}

var car1 = new Car("Toyota", "Corolla", 2018, 120000, "Blue"); // avg 120,000  <-- highest
var car2 = new Car("Suzuki", "Splash", 2010, 166000, "Turqoise"); // avg 18,444
var car3 = new Car("Nissan", "Juke", 2015, 400000, "Orange"); // avg 100,000

var cars = [];
cars.push(car1, car2, car3);
console.log(cars);

function highestKmPerYear(carsArr) {
    //var max;
    // for (var i = 0; i <= cars.length - 2; i++) {
    //     (carsArr[i + 1].kmPerYear() >= carsArr[i].kmPerYear()) ? max = carsArr[i + 1].brand : max = carsArr[i].brand;
    // }
    // return max;

    const max = data.reduce(function(prev, current) {
        return (prev.kmPerYear() > current.kmPerYear()) ? prev : current;
    })

}

console.log("Highest Km per year: " + highestKmPerYear(cars));

