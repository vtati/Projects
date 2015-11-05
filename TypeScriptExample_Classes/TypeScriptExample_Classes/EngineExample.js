var Engine;
(function (Engine) {
    var BMWEngine = (function () {
        function BMWEngine(name, etype) {
            this.name = name;
            this.etype = etype;
        }
        BMWEngine.prototype.EngineDetails = function () {
            return this.name + " " + this.etype;
        };
        return BMWEngine;
    })();
    alert(new BMWEngine("XDRIVE", "V30").EngineDetails());
})(Engine || (Engine = {}));
//# sourceMappingURL=EngineExample.js.map