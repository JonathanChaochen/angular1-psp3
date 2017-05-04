/* jshint undef: true, unused: true, esversion: 6, asi: true */

// https://www.sitepoint.com/writing-angularjs-apps-using-es6/

class ResetForm {
  constructor($parse) {
    //the directive can be used as an attribute only
    this.restrict = 'A'
    this.parse = $parse
  }

  /*
  link is a function that defines functionality of directive
  scope: scope associated with the element
  element: element on which this directive used
  attrs: key value pair of element attributes
  */
  link(scope, element, attrs) {
    let fn = this.parse(attrs.resetForm )
    element.on('click', function(changeEvent) {

      if( scope.sales.id !== ''|| scope.firstName.id !== '' || scope.sales.lastName !== ''
        || scope.sales.salary !== '' || scope.sales.yearCommenced !== ''){

        scope.sales.id = ''
        scope.sales.firstName = ''
        scope.sales.lastName = ''
        scope.sales.salary = ''
        scope.sales.yearCommenced = ''

      }

        fn(scope)

        // http://haroldrv.com/2015/02/using-scope-apply-in-angularjs/
        // Angular only monitors variables used in expressions and anything inside of a $watch living inside the $scope.
        scope.$apply()


    })
  }



  static directiveFactory($parse) {
    ResetForm.instance = new ResetForm($parse)
    return ResetForm.instance
  }
}

ResetForm.directiveFactory.$inject = ['$parse']
