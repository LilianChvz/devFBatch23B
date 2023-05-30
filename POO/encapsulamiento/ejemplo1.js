class Student {
    constructor (name, username, classes, address) {
        this.name = name;
        this._username = username;
        this.classes = classes;
        this._address = address; //el guión bajo es para hacer alguna propiedad privada
    }

    get getAddress() { //Este es un filtro para las propiedades privadas. El "getAddress" es el nombre de la función, el bueno es "get ".
        return this._address
    }

    set validateUserName(newUserName) {
        if(newUserName === "usuarioMaldito" || newUserName === "laCucaracha") {
            console.warn("No haga eso joven. Se ve mal xd");
        }else {
            this._username = newUserName
            return newUserName
        }
    }
}

const emilio = new Student('Emilio', ["History", "Math", "Physics"], "Dillion Av, etc")

console.log(emilio.name);
console.log(emilio.classes);
console.log(emilio.getAddress); //Así mandas llamar una propiedad que es privada
console.log(emilio.validateUserName = "laCucaracha");