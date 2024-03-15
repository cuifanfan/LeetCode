interface IPersonConstructor {
    new(name: string, age: number): IPersonInstance
}

interface IPersonInstance {
    sayName(): void
    sayYourAge(age: number): void
}

function createPerson(constructor: IPersonConstructor, name: string, age: number): IPersonInstance {
    return new constructor(name, age);
}

class ChinaPerson implements IPersonInstance {
    constructor(name: string, age: number) { }
    sayName() {

    }

    sayYourAge(age: number) {
        console.log('Your age is:', age);
        
    }
}

const cuifan = createPerson(ChinaPerson, 'cuifan', 24);