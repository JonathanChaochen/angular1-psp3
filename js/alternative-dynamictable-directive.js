/* jshint undef: true, unused: true, esversion: 6, asi: true */

class AlternativeDynamicTable {
  constructor() {
    this.restrict = 'E'

    this.template = ` <div id="showP" class="content" data-ng-if="product.company.allMyProducts.length">
        <table class="table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>PRICE</th>
            <th>OnHand</th>
            <th>MIN NUM</th>

          </tr>
          <tr data-ng-repeat="product in product.company.allMyProducts | orderBy : 'id'">
            <td class="td1">{{product.id}}</td>
            <td class="td1">{{product.name}}</td>
            <td class="td3">{{product.price}}</td>
            <td class="td4">{{product.quantityOnHand}}</td>
            <td class="td5">{{product.minimumQuantity}}</td>

          </tr>
        </table>
      </div>`
  }

  static directiveFactory() {
    AlternativeDynamicTable.instance = new AlternativeDynamicTable()
    return AlternativeDynamicTable.instance
  }
}
