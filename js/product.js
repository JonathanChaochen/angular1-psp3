  /* jshint undef: true, unused: true, esversion: 6, asi: true */

  class Product {
    constructor(newId, newName, newPrice, newQuantityOnHand, newMinimumQuantity, theCompany) {
      // ADD CODE HERE
      this.id = newId
      this.name = newName
      this.price = newPrice
      this.quantityOnHand = newQuantityOnHand
      this.minimumQuantity = newMinimumQuantity
      this.myCompany = theCompany

    }

    moreNeeded() {
      return Number(this.quantityOnHand) < Number(this.minimumQuantity) ? true:false
    }

  }
