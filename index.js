class Breakfast {
    constructor(food, drink){
    this.food = food
    this.drink = drink
    
    }
    
}
let bfast = new Breakfast("eggs", "juice")
bfast.food 
bfast.drink



class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}
const newlunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea")
newlunch.salad
newlunch.soup
newlunch.drink


class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert = dessert
        
    }
}
const newDinner = new Dinner("balsamic salad", "consomme","filet mignon")
newDinner.salad
newDinner.soup
newDinner.entree
