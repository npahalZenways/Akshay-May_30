
// Decorators are simply function which can change the behaviour or properties of class, property, method, parameters;

function skilled(param){
    return function (target){
        target.prototype.skill = param;
    }
}

// class decorator
@skilled('abc')
class player{
    skill;
}

var myPlayer = new player();

console.log(myPlayer.skill)