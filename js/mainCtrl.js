/* jshint undef: true, unused: true, esversion: 6, asi: true */

class MainCtrl {
  constructor(company) {
    this.title = 'PSP3: BCPR280 Assignment1'
    this.company = company

    this.absoluteAverage = 0
    this.sampleConvariance = 0
    // Average absolute deviation
  }


  showContent(fileContent) {
    this.fileContent = fileContent
  }

  does() {
   this.parseSalesPersonData()

  }

  parseSalesPersonData( ){

    let contentLines = this.fileContent.split('\n')// split every line of csv file

      let title = contentLines.splice(0, 1)       //remove first line  or slice(1)

      // let titleString = title.toString(); //converse to String
      // let titleArray =  titleString.split(",").join(" ")
      // this.company = new Company()

      for(let i = 0; i < contentLines.length; i++){
        let salesperson = contentLines[i].toString()
        let salespersonArray = salesperson.split(",")   // split from comma
        let salary = salespersonArray.splice(3,2).join("")  // put salary together
        salary = salary.replace("$","")     //remove $
        // this.salaries.push(new Salary(Number(salar)))
        salespersonArray.splice(3,0, salary)

              // insert salary back

        if(salespersonArray.length == 5){
          this.company.addSalesPerson( ...salespersonArray ) //push to info.allMySalesPerson
        }
      }
      // console.log( this.company.getAllMySalesPerson() )

  }


  does2() {
    this.parseProductData()
  }

  parseProductData() {
      let contentLines = this.fileContent.split('\n')// split every line of csv file

        let title = contentLines.splice(0, 1)       //remove first line  or slice(1)


        for(let i = 0; i < contentLines.length; i++){
          let product = contentLines[i].toString()
          let productArray = product.split(",")   // split from comma
          // let salary = salespersonArray.splice(3,2).join("")  // put salary together
          // salary = salary.replace("$","")     //remove $
          // salespersonArray.splice(3,0, salary)         // insert salary back

          if(productArray.length == 5){
            this.company.addProduct( ...productArray ) //push to info.allMySalesPerson
          }
        }
  }

  calculateSalary(){
    let average = 0, absAverage =0
    let count = this.company.allMySalesPersons.length;


    // set average salaries
    average = this.averageSalary();

    // |x-m|
    for(let i = 0; i< count; i++){
      absAverage += Math.abs(this.company.allMySalesPersons[i].salary - average)
      // console.log(x)
    }

    this.absoluteAverage =  Number(absAverage/count)

  }

  calculateSampleCovariance(){
      let sum = 0
      let averageSalary = this.averageSalary()
      let averageYear = this.averageYear()

      let count = this.company.allMySalesPersons.length;
      for(let i = 0; i < count; i++){
        sum += (this.company.allMySalesPersons[i].salary - averageSalary)*
        (this.company.allMySalesPersons[i].yearCommenced - averageYear)
      }
      this.sampleConvariance = sum/(count-1)

  }

  averageSalary() {
    let sum = 0
    let count = this.company.allMySalesPersons.length;

    // sum all the salaries
    for(let i = 0; i < count; i++){
      sum += Number(this.company.allMySalesPersons[i].salary)
    }

    // set average salaries
    return Number(sum/count)
  }

  averageYear() {
    let sum = 0
    let count = this.company.allMySalesPersons.length;

    // sum all the salaries
    for(let i = 0; i < count; i++){
      sum += Number(this.company.allMySalesPersons[i].yearCommenced)
    }

    // set average salaries
    return Number(sum/count)
  }


}

// OnReadFile.$inject = ['company']
