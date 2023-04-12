import { Food } from "./Food";

export class CartItem {
  food: Food;
  quantity: number = 1;

  constructor(food: Food) {
    this.food = food;
  }

  // definizione di una funzione per prelevare il prezzo:
  get price(): number {
    return this.food.price * this.quantity;
  }
  /* getters e setters sono funzioni speciali che si comportano come una normale, ma si possono trattare come normali proprietà. Invece di scrivere:
    getPrice(): number {
      return this.food.price * this.quantity;
    },
    è possibile usare un getters "get"; dove serve, posso dunque scrivere this.price invece di this.getPrice()
   */

}
