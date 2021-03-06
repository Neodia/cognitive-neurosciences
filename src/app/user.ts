export class User {

    sexe : string;
    mainEcriture : string;
    dyslexie : string;
    trouble : string;

    constructor() {
        this.sexe = null;
        this.mainEcriture = null;
        this.dyslexie = null;
        this.trouble = null;
    }

    isValid() {
        return this.sexe != null &&
            this.mainEcriture != null &&
            this.dyslexie != null &&
            this.trouble != null;
    }

}
