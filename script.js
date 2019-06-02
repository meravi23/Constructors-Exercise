function myFunction() {

    function Car(brand, model, year, km, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.km = km;
        this.color = color;
    }

    Car.prototype.kmPerYear = function () {
        var avgKm = (this.km / (2019 - this.year));
        return avgKm;
    }

    var car1 = new Car("Toyota", "Corolla", 2018, 12000, "Blue"); // avg 12000
    var car2 = new Car("Suzuki", "Splash", 2010, 166000, "Turqoise"); // avg 18,444
    var car3 = new Car("Nissan", "Juke", 2015, 400000, "Orange"); // avg 100,000

    var cars = [];
    cars.push(car1, car2, car3);

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

    function addRow(cars) {
        for (var i = 0; i < cars.length; i++) {
            // get values
            var brand = cars[i].brand;
            var model = cars[i].model;
            var year = cars[i].year;
            var km = cars[i].km;
            var cl = cars[i].color;
            var kmPerYear = cars[i].kmPerYear();

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
            cell5.innerHTML = kmPerYear;
        }
    }

    addRow(cars);

    function updateTable() {
        var brand = document.getElementById("brand").value;
        var model = document.getElementById("model").value;
        var year = parseInt(document.getElementById("year").value);
        var km = parseInt(document.getElementById("km").value);
        var kmPerYear = document.getElementById("color").value;

        var inputCars = [];

        var myFormInputs = document.getElementsByClassName("form-control");
        var myFormData = Array.prototype.filter.call(myFormInputs, function (anElement) {
            return anElement.value;
        })

    }


};