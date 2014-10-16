angular.module('datatablesSampleApp', ['datatables']).controller('withAjaxCtrl', function ($scope, DTOptionsBuilder, DTColumnBuilder) {
    $scope.dtOptions = {
    	paginationType: 'full_numbers',
    	 "data": [{
			    "id": 860,
			    "firstName": "Superman",
			    "lastName": "Yoda"
			}, {
			    "id": 870,
			    "firstName": "Foo",
			    "lastName": "Whateveryournameis"
			}, {
			    "id": 590,
			    "firstName": "Toto",
			    "lastName": "Titi"
			}, {
			    "id": 803,
			    "firstName": "Luke",
			    "lastName": "Kyle"
		}]
	};
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    ];
});