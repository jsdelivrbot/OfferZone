myApp.controller("MenuCtrl", ['$scope', '$location','MenuFactory',
  function($scope, $location,MenuFactory) {
      $scope.success=false;

     $scope.menus='';

      MenuFactory.getAllmenu().success(function(data){
        console.log('ddd'+data);
        $scope.menus=data;
      });


    $scope.isActive = function(route) {
      return route === $location.path();
    }

    $scope.genPDF=function(){
      console.log('pdfgen');

       html2canvas(document.getElementById('print'), {
            onrendered: function (canvas) {
         
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
            }
        });

    }

    $scope.createMenu=function(){

    MenuFactory.create($scope.menu).success(function(data){
    $scope.menus.push($scope.menu);
     $scope.success=true;
     $scope.menu='';

    });
    }
  }
]);