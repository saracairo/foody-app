// =============================================
//                FOOD MODEL
// =============================================
// La classe Food contiene i dettagli di ogni piatto ordinabile

export class Food {
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false; // false è il valore di default;
  stars: number = 0;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}

/** NOTE
 * La parola chiave "export" rende la classe accessibile al di fuori del file Food.ts;
 * ! dopo il nome di una proprietà indica al modello che ogni sua istanza creata dovrà obbligatoriamente richiedere un valore della proprietà in questione;
 * un ?, al contrario, rende una proprietà opzionale alla creazione di un'istanza;
 * per impostare, invece, un valore di default (dunque rendere una proprietà non mandatoria né opzionale), usare la sintassi:
  id: number = 0;
*/
