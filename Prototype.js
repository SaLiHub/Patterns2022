const Warrior = function(name) {
  this.name = name
  this.hp = 100
}

Warrior.prototype.bash = function(target) {
  target.hp -= 15
}

Warrior.prototype.omniSlash = function(target) {
  if (target.hp < 50) {
    return
  }
  target.hp -= 50
}

const sam = new Warrior('Sam')
const lenardo = new Warrior('Lenardo')

sam.bash(lenardo)