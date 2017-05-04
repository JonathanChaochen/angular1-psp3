  /* jshint undef: true, unused: true, esversion: 6, asi: true */
  class SalesController{
    constructor(company){
      this.company = company;
      this.id = ''
      this.firstName = ''
      this.lastName = ''
      this.salary =  ''
      this.yearCommenced = ''

      this.isHidden = true

    }

     addSalesPerson(){
       return this.company.addSalesPerson(this.id, this.firstName, this.lastName, this.salary, this.yearCommenced)

     }


     getSalesPersonsToOrder(){
       return this.company.getSalesPersonsToOrder()
     }

  }
