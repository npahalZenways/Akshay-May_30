// Decorators are simply function which can change the behaviour or properties of class, property, method, parameters;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function skilled(param) {
    return function (target) {
        target.prototype.skill = param;
    };
}
// class decorator
let player = class player {
};
player = __decorate([
    skilled('abc')
], player);
var myPlayer = new player();
console.log(myPlayer.skill);
//# sourceMappingURL=decorator.js.map