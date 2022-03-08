class Clothes {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }


}

class Closet {
    constructor(name){
        this.name = name;
        this.clothings = [];
    }

    addArticleOfClothing(clothing){
        if (clothing instanceof Closet){
            this.clothings.push(this.clothings);
        } else {
            throw new Error (`You can only add types of clothes.`)
        }
    }

    describe(){
        return `${this.name} is wearing ${this.clothings.length} today.`;
    }



}

class Menu {

    constructor(){
        this.closet = [];
        this.selectedCloset = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case "1":
                    this.createCloset();
                    break;
                case "2":
                    this.viewCloset();
                    break;
                case "3":
                    this.deleteCloset();
                    break;
                case "4":
                    this.displayCloset();
                    break;
                default:
                    selection = 0;           
            }
            selection = this.showMainMenuOptions();

        }

        alert("Goodbye!");


    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new closet
        2) view closet
        3) delete closet 
        4) display all closets
    `);
    }

    showClosetMenuOptions(closetInfo) {
        return prompt (`
        0) back
        1) create clothes
        2) delete clothes 
     
        ${closetInfo}
        `);
    }

    viewCloset() {
        let index = prompt('Enter the closet you want to look at:');
        if (index > -1 && index < this.closet.length) {
            this.selectedCloset = this.closet[index];
            let description = 'Closet Name: ' + this.selectedCloset.name + '\n';
            
            for (let i = 0; i < this.selectedCloset.clothings.length; i++) {
            description += i + ') ' + this.selectedCloset.clothings[i].name + ' - ' + this.selectedCloset.clothings[i].type + '\n';
            }
        

        let selection = this.showClosetMenuOptions(description);
        switch(selection) {
            case '1':
                this.createClothes();
                break;
            case '2':
                this.deleteClothes();
        }
    }
    }

    displayCloset() {
        let closetString = ' ';
        for (let i = 0; i < this.closet.length; i++){
            closetString += i + ' ) ' + this.closet[i].name + '\n'
        }
        alert(closetString);
    }


    createClothes() {
        let name = prompt(`Enter name for the new clothes:`);
        this.selectedCloset.clothings.push(new Clothes(name, type))
    }

    createCloset(){
        let name = prompt('Enter name for the new closet.');
        this.closet.push(new Closet(name));
    }

    

    deleteCloset() {
        let index = prompt(`Enter the closet you wish to delete:`); 
        if ( index > -1 && index < this.selectedCloset.clothings.length) {
            this.selectedCloset.clothings.splice(index, 1);
        }
    }

}

let menu = new Menu();
menu.start();