
var page = angular.module("pageGen", []);
		page.controller('initPage', function($scope){
			$scope.dataObj = itemInfo;
			//Creates the Header Body and Footer out of the Templates
			//Adding templates in this way allows for the Angular in the templates to be generated.
			$scope.headSelector = 'templates/header.html';
			$scope.bodySelector= 'templates/body.html';
			$scope.footSelector= 'templates/footer.html';
			$scope.body = $scope.bodySelector;
			$scope.header = $scope.headSelector;
			$scope.footer = $scope.footSelector;
			//Creates all meues in Navigation bar
			$scope.navItems = navBar;
			//Adds Footer data
			$scope.foot = footer;
			//Creates the collapsable and expandable details section
			$scope.collapse = function(){
	    		if(this.showSection){
					this.imgExp = $scope.arrow['col'];
				}else{
					this.imgExp = $scope.arrow['exp'];
				}
	    		this.showSection = !this.showSection;
	  		};
	  		//arrow is a map of the locations for the images
	  		$scope.arrow = {'exp' : "../assets/arrow-expanded.png", 'col': "../assets/arrow-collapsed.png"};
	  		$scope.imgExp = $scope.arrow['col'];

	  		//function brings up the modal window. you can click the modal itself or the add to cart button again to dismiss it.
	  		$scope.toggleModal = function(){
	  			console.log('hi');
	  			if($scope.modalToggle){
	  				$scope.dim = 'dimmer';
	  			}else{
	  				$scope.dim='';
	  			}
	  			$scope.modalToggle = !$scope.modalToggle;
	  		};
	  		//Changes the item selection from the mini thumbnails below.
			$scope.changeSelection = function(currentSelection){
				$scope.currentSelection = currentSelection;
				//Creates the product page for selected item
				$scope.itemTitle = itemInfo[$scope.currentSelection]['title'];
				$scope.itemDescription = itemInfo[$scope.currentSelection]['description']
				$scope.lrgImg = itemInfo[$scope.currentSelection]['lrgImgLocation'];
				$scope.bulletList = itemInfo[$scope.currentSelection]['bulletPoints'];
				$scope.itemPrice= itemInfo[$scope.currentSelection]['price'];
				$scope.itemExDetail = itemInfo[$scope.currentSelection]['extraDetails'];
			};
			//generates all the different color options for the product. Creates an Array of thumbnail locations
			$scope.smlImg = [];
				for(var key = 0; key< itemInfo.length; key++){
					$scope.smlImg.push(itemInfo[key]['smlImgLocation']);
				}

		});

	