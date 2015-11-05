module InheritanceOverride {
    class Person {
        firstname: string;
        lastname: string;
        birthdate: Date;
        constructor(fname: string, lname: string, bday:Date) {
            this.firstname = fname;
            this.lastname = lname;
            this.birthdate = bday;
        }

        Age(): string {
            return this.firstname + " " + this.lastname + " " + this.birthdate.toDateString();
        }

    }

    class Rapper extends Person {

        constructor(firstname: string, lastname: string, bday: Date) {
            super(firstname, lastname, bday);
        }
        Age(): string {

            return this.firstname + " " + this.lastname + " " + this.birthdate.getFullYear();
        }
    }

    var rap: Person = new Rapper("Venu", "Tati", new Date("08/08/1983"));

    alert(rap.Age());
} 