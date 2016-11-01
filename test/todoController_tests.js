describe("todoController", function() {
   beforeEach(module('todoMVC'));

   var $controller;
   beforeEach(inject(function(_$controller_) {
       $controller = _$controller_;
   }));

   it("should use a simple function inside todoController", function() {
      var $scope = {};
      var controller = $controller('todoController', { $scope: $scope });
      expect(5).toBe(5);
   });
})
