export class Product {
    name: string;
    supplier: string;
    emailSupplier: string;
    ingredients: Array<string>;
    description: string;
    age: number;
    storageConditions: string;
    cost: number;
  
    constructor(theName: string="", theSupplier: string="", theEmailSupplier: string="", theIngredients: Array<string>=[""], theDescription: string="", theAge: number=0, theStorageConditions: string="", theCost: number=0) {
      this.name = theName;
      this.supplier = theSupplier;
      this.emailSupplier = theEmailSupplier;
      this.ingredients = theIngredients;
      this.description = theDescription;
      this.age = theAge;
      this.storageConditions = theStorageConditions;
      this.cost = theCost;
    }
}
