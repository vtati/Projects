module Company {

    export class Person {
        firstName: string;
        lastName: string;
        constructor(fname: string, lname: string) {
            this.firstName = fname;
            this.lastName = lname;
        }
        Fullname(): string {
            return this.firstName + " " + this.lastName;
        }
    }
    class Employee {

    }

}

enum EngineType {
    V4,
    V6,
    V8
}
module Class1 {

   export class car {
        name: string;
        etype: EngineType;
        constructor(name: string, etype: EngineType) {
            this.name = name;
            this.etype = etype;
        }
        Start(): string {
            return "Start Class1.Car";
        }
        Run(): string {
            return "run Class1.car";
        }

    }
}

module Class2 {

   export class car {
        name: string;
        etype: EngineType;
        constructor(name: string, etype: EngineType) {
            this.name = name;
            this.etype = etype;
        }
        Start(): string {
            return "Start Class2.Car";
        }
        Run(): string {
            return "run Class2.car";
        }

    }
}

alert(new Class1.car("BMW X3", EngineType.V4).Start());
alert(new Class2.car("BMW X3", EngineType.V4).Start());

 