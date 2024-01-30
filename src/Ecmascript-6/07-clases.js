class User {
    constructor(name, age, gender){
        this.name = name;
        this._age = age; // Use a different name for the property
        this.gender = gender;
    }

    Walk(){
        return 'I am walking lol';
    }

    Greeting(){
        return 'Hello';
    }

    Speak(){
        return `${this.Greeting()} ${this.name}`;
    }

    get age(){
        return this._age; // Use a different name to avoid conflict
    }

    set age(newAge){
        this._age = newAge; // Use a different name to avoid conflict
    }
}

const Alejandro = new User('Jhon', 25, 'Male');
console.log(Alejandro.Walk());
console.log(Alejandro.Greeting());
console.log(Alejandro.Speak());
console.log(Alejandro.age);
console.log(Alejandro.age = 19);
