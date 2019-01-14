import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listOfProducts: Array<Product> = [
    new Product("Velouté soupe", "Knorr", "contact@knorr.com", ["courgettes", "pommes de terre", "fenouil"], "Un délicieux potage à consommer sans modération", 1, "Conserver à l'abri de la lumière", 1.27),
    new Product("Moutarde à l'ancienne", "Amora", "contact@amora.com", ["huile d'olive", "grains de moutarde"], "Une bien bonne moutarde", 12, "Conserver au sec", 2.98),
    new Product("Ketchup", "Heinz", "contact@heinz.com", ["tomates", "sucre"], "Pour accompagner au mieux vos pâtes", 6, "Conserver au frais", 3.76),
    new Product("Mayonnaise", "Lesieur", "contact@lesieur.com", ["grains de tournesol", "huile"], "Avec vos oeufs", 4, "Conserver au sec", 2.17),
    new Product("Café", "Mère grand", "contact@mere-grand.com", ["grains de café", "c'est tout"], "Pour bien démarrer la journée", 76, "Conserver au sec", 7.98)
  ];

  constructor() { }

  getProducts() {
    return this.listOfProducts;
  }
}
