
module Vehicle {
    interface ICar {
        engine: string;
        color: string;
        hasLeatherSeats?: boolean;
    }

    var toyota: ICar;

    toyota = { color: "Silver", engine: "1.4v" };

    var c: Company.Person = new Company.Person("", "");

}


