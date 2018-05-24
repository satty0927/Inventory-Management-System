var app=angular.module("myMod",["ngRoute"])
    .run(function($rootScope){
        $rootScope.form=[];
        $rootScope.regdata=[];
        $rootScope.items=[];
    })

    .config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl: './Pages/Homepage.html',
            controller:"entityData"
        })

        .when("/New Request",{
            templateUrl: './Pages/New Request.html',
            controller:"myControl"
        })

        .when("/AppStatus",{
            templateUrl: '../Pages/My Requests.html',
            
        })

        .when("/User Page",{
            templateUrl: '../Pages/User Page.html'
        })

        .when("/Approver Page",{
            templateUrl:"../Pages/Approver Page.html",
            controller:"buttonControl"
        })
        
        .when("/Super Admin",{
            templateUrl:"../Pages/Super Admin.html",
            
        })
        .when("/Add Items",{
            templateUrl:"../Pages/Add Items.html",
            controller:"addItems"
            
        })
        .when("/Items",{
            templateUrl:"../Pages/Available Items.html",
            
            
        })

    })

    .controller("entityData",function($scope,$rootScope){
        $rootScope.register=function(){
            $rootScope.regdata.push({FirstName:$scope.fName,
                                    MidlleName:$scope.mName,
                                    LastName:$scope.lName,
                                    Phone:$scope.phone,
                                    Email:$scope.email,
                                    CompName:$scope.name,
                                    CompNumber:$scope.number,
                                    CompEmail:$scope.mail});
        }
       

    })
    .controller("myControl",function($scope,$rootScope){
        $scope.storage=function(){
            $rootScope.form.push({CompName:$scope.CompanyName,
                                CompEmail:$scope.CompanyEmail,
                                CompContacts:$scope.CompanyContacts,
                                ReqName:$scope.RequestorName,
                                ReqEmail:$scope.RequestorEmail,
                                ItemName:$scope.ItemName,
                                ItemQuantity:$scope.ItemQuantity,
                                Status:"Pending"});
        }

    })


    .controller("buttonControl",function($scope,$rootScope){
        $scope.approve=function(x){
            x.Status="Approved";
        }

        $scope.reject=function(x){
            x.Status="Rejected";
        }

    })

    .controller("addItems",function($scope,$rootScope){
        $scope.drop=function(){
            $rootScope.items.push({ItemName:$scope.iName,
                                ItemQuantity:$scope.iUnits,
                                ItemCategory:$scope.iCategory});
        }
    })

    .controller("missingData",function($scope,$rootScope){
    if($rootScope.forms.length==0){
        $scope.empty;
    }
});