class Character{
    constructor(name, healt, position){
        this.name = name;
        this.healt = healt
        this.position = position
    }

    canMove(){
        console.log(`${this.name} moves to ${this.position}`);
    }
}


function canAttack(character){
    return{
        attack : () => {
            console.log(`${character.name} attacks with a weapon`);
        }
    }
}
function canDefend(character){
    return {
        defend: ()=>{
            console.log(`${character.name} defends with a shild`)
        }
    }
}

function canCastSpell(character){
    return{
        catSpell: () => {
            console.log(`${character.name} cats a spell`)
        }
    }
}

function createMonster(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}

function createGuardian(name){
    const character = new Character(name, 100, 0)
    return Object.assign(character, canDefend(character));
}

function createWizard(name){
    const character = new Character(name, 100, 0)
    return Object.assign(character, canCastSpell())

}


function createWarior(name){
    const character = new Character(name, 100, 0)
    return Object.assign(character, canAttack(), canDefend())
}





const guardian = createGuardian('Guardian');
guardian.defend()




