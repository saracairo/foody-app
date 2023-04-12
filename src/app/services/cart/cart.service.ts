import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart()

  addToCart(food: Food): void {
    // controllo: c'è già un cartItem con questo food?
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
      // per ognuno degli items in questo carrello, se l'espressione "item.food.id === food.id" (se il singolo item ha lo stesso id di quello che si sta aggiungendo), ritorna l'elemento come variabile cartItem;
    if(cartItem) {
      // se questo cartItem non è null,
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return; //somma 1 alla quantità di cartItem;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void {
    this.cart.items =
      this.cart.items.filter(item => item.food.id != foodId);
      // rimuovi tutti i food che hanno questo foodId
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;

  }

  // funzione che incapsula il carrello:
  getCart(): Cart {
    return this.cart;
  }

}
