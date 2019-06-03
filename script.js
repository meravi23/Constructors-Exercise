function onLoad() {

    updateTable(cars);

}

// Car Constructor:
function Car(brand, model, year, km, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.km = km;
    this.color = color;
}

Car.prototype.kmPerYear = function () {
    var avgKm = Math.floor((this.km / (2019 - this.year)));
    return avgKm;
}

// Create basic array of cars:
var car1 = new Car("Toyota", "Corolla", 2018, 14000, "Blue"); // avg 12000
var car2 = new Car("Suzuki", "Splash", 2010, 166000, "Turqoise"); // avg 18,444
var car3 = new Car("Nissan", "Juke", 2015, 400000, "Orange"); // avg 100,000

var cars = [];
cars.push(car1, car2, car3);


function addCar(arrayOfCars) {
    //get input values from user by form
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var year = parseInt(document.getElementById("year").value);
    var km = parseInt(document.getElementById("km").value);
    var color = document.getElementById("color").value;

    // create new Car object by constructor
    var car = new Car(brand, model, year, km, color);

    arrayOfCars.push(car);

    return arrayOfCars;
}


// calculate highest Km per year 
function highestKmPerYear(cars) {
    var carMaxKm = cars[0];
    for (var i = 1; i < cars.length; i++) {
        if (cars[i].kmPerYear() >= carMaxKm.kmPerYear()) {
            carMaxKm = cars[i];
        }
    }
    return carMaxKm;
}

console.log("Highest Km per year: " + highestKmPerYear(cars).brand);


function updateTable(carArr) {

    for (var i = 0; i < carArr.length; i++) {
        // get values
        var brand = carArr[i].brand;
        var model = carArr[i].model;
        var year = carArr[i].year;
        var km = carArr[i].km;
        var color = carArr[i].color;
        var kmPerYear = carArr[i].kmPerYear();

        // get HTML table (0 - first table)
        var table = document.getElementsByTagName("table")[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = brand;
        cell2.innerHTML = model;
        cell3.innerHTML = year;
        cell4.innerHTML = km;
        cell5.innerHTML = color;
        cell6.innerHTML = kmPerYear;
    }
}

function addUserInputToTable() {

    var updatedArray = addCar(cars);

    // delete rows
    var tableHeaderRowCount = 1;
    var table = document.getElementById('cars-table');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }

    updateTable(updatedArray);

}
