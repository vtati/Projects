var Company;
(function (Company) {
    var Person = (function () {
        function Person(fname, lname) {
            this.firstName = fname;
            this.lastName = lname;
        }
        Person.prototype.Fullname = function () {
            return this.firstName + " " + this.lastName;
        };
        return Person;
    })();
    Company.Person = Person;
    var Employee = (function () {
        function Employee() {
        }
        return Employee;
    })();
})(Company || (Company = {}));
var EngineType;
(function (EngineType) {
    EngineType[EngineType["V4"] = 0] = "V4";
    EngineType[EngineType["V6"] = 1] = "V6";
    EngineType[EngineType["V8"] = 2] = "V8";
})(EngineType || (EngineType = {}));
var Class1;
(function (Class1) {
    var car = (function () {
        function car(name, etype) {
            this.name = name;
            this.etype = etype;
        }
        car.prototype.Start = function () {
            return "Start Class1.Car";
        };
        car.prototype.Run = function () {
            return "run Class1.car";
        };
        return car;
    })();
    Class1.car = car;
})(Class1 || (Class1 = {}));
var Class2;
(function (Class2) {
    var car = (function () {
        function car(name, etype) {
            this.name = name;
            this.etype = etype;
        }
        car.prototype.Start = function () {
            return "Start Class2.Car";
        };
        car.prototype.Run = function () {
            return "run Class2.car";
        };
        return car;
    })();
    Class2.car = car;
})(Class2 || (Class2 = {}));
alert(new Class1.car("BMW X3", EngineType.V4).Start());
alert(new Class2.car("BMW X3", EngineType.V4).Start());
//# sourceMappingURL=Modules.js.map