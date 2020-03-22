"use strict";
var pi = Math.PI;
console.log(PI);
var Preson = /** @class */ (function () {
    function Preson() {
        this.IP = Math.PI;
        this.name = '';
        this.name = 'myName';
        this.init();
    }
    ;
    Preson.prototype.init = function () {
        console.log(this.name, Preson.index);
    };
    ;
    Preson.index = 1024;
    Preson.numInt = function (opt) {
        return Preson.index;
    };
    return Preson;
}());
;
