class BasePlayer {
    constructor(name, hp, damage,){ // constructor = по сути это функция
        this.name = name; // 
        this.hp = hp; // health point - здоровье персонажа
        this.damage = damage;
    }
sayName(){
    return this.name

}
attack(target){
    target.hp = target.hp - this.damage;
}
getDamage(damage){
    this.hp = this.hp - damage
}

}
const player = new BasePlayer("Steve", 100, 5)

player.getDamage(10)
console.log(player.hp)

class Tank extends BasePlayer {
    getShield (){
        return "я не могу быть атакован"
    }
}

let tank = new Tank ('tank', 100, 20)
console.log(tank.sayName())
console.log(tank.getShield())

// let obj = {
//     name: "Ivan";
//     surname: "Ivanov";
//     sayName: function(){
//         return `меня зовут ${this.name} ${this.surname}`//this означает контекст - т.е. то что внутри объекта
//     }

// }
// let name = "Semen"
// let surname = "Semenovich"
// console.log(obj,sayName());

// class - станок на заводе