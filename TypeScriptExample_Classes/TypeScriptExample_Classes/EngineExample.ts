module Engine {

    interface IEngine {
        name: string;
        etype: string;

        EngineDetails(): string;

    }

    class BMWEngine implements IEngine {
        name: string;
        etype: string;
        constructor(name: string, etype: string) {
            this.name = name;
            this.etype = etype;
        }

        EngineDetails(): string {
            return this.name + " " + this.etype;
        }
    }

    alert(new BMWEngine("XDRIVE", "V30").EngineDetails());
} 