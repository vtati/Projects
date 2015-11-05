var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InheritanceOverride;
(function (InheritanceOverride) {
    var Person = (function () {
        function Person(fname, lname, bday) {
            this.firstname = fname;
            this.lastname = lname;
            this.birthdate = bday;
        }
        Person.prototype.Age = function () {
            return this.firstname + " " + this.lastname + " " + this.birthdate.toDateString();
        };
        return Person;
    })();
    var Rapper = (function (_super) {
        __extends(Rapper, _super);
        function Rapper(firstname, lastname, bday) {
            _super.call(this, firstname, lastname, bday);
        }
        Rapper.prototype.Age = function () {
            return this.firstname + " " + this.lastname + " " + this.birthdate.getFullYear();
        };
        return Rapper;
    })(Person);
    var rap = new Rapper("Venu", "Tati", new Date("08/08/1983"));
    alert(rap.Age());
})(InheritanceOverride || (InheritanceOverride = {}));
//# sourceMappingURL=InhertitanceOveride.js.map