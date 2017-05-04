  /* jshint undef: true, unused: true, esversion: 6, asi: true */

  class ProductController {
     constructor (company){
      this.company = company
       this.pId = ''
       this.pName = ''
       this.price = ''
       this.qHand = ''
       this.minQ = ''

       this.isHidden = true
     }
    addProduct(){
      return this.company.addProduct(this.pId,this.pName,this.price, this.qHand ,this.minQ)
    }

    getProductsToOrder(){
      return this.company.getProductsToOrder()
    }
  }






