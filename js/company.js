    /* jshint undef: true, unused: true, esversion: 6, asi: true */

  class Company {
    constructor() {
      this.allMyProducts = []
      this.allMySalesPersons = []
    }

    addSalesPerson(newId, newFirstName, newLastName, newSalary, newYearCommenced) {
      let newSalesPerson = new SalesPerson(newId, newFirstName, newLastName, newSalary, newYearCommenced, this)
      this.allMySalesPersons.push(newSalesPerson)
    }

      addProduct(newId, newName, newPrice, newQuantityOnHand, newMinimumQuantity) {
          let newProduct = new Product(newId, newName, newPrice, newQuantityOnHand, newMinimumQuantity, this)
          this.allMyProducts.push(newProduct)
      }

    sortSalesPersons() {

      this.allMySalesPersons.sort(function(a, b) {
        let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
        if (nameA < nameB) //sort string ascending
         return -1;
        if (nameA > nameB)
         return 1;
        return 0; //default return value (no sorting)

      })
    }

    sortProducts() {
      this.allMyProducts.sort(function(a, b) {
        return a.id > b.id
      })
    }



    getAllMySalesPerson() {
      // this.sortSalesPersons()
      // let result = ''
      // for (let aSalesPerson of this.allMySalesPersons) {
      //   result += aSalesPerson + '\n'
      // }
      return this.allMySalesPersons
    }

    getSalesPersonsToOrder() {
      return this.allMySalesPersons
    }

    getAllMyProducts() {
        // let out = ''
        // for (let aProduct of this.allMyProducts) {
        //     out += aProduct + '\n'
        // }
        return this.allMyProducts
    }

    getProductsToOrder() {
        // this.sortProducts();
        // let out = ''
        // for (let aProduct of this.allMyProducts) {
        //     if ( aProduct.moreNeeded() ) {
        //         out += aProduct.toFormatString() + '<br>'
        //     }
        // }
        // return out
        let allMyMoreNeededProducts = []
        for (let aProduct of this.allMyProducts) {
          if ( aProduct.moreNeeded() ) {
              allMyMoreNeededProducts.push(aProduct)
          }
        }

        return allMyMoreNeededProducts
    }

    static getFactory(){
      return new Company()
    }
  }
