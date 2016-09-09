(function(){
  angular
    .module('todoMVC')
    .controller('TodoController', todoController);

  function todoController(){
    var vm = this;
    vm.todos = [];
    vm.addTodo = addTodo;
    vm.removeCompleted = removeCompleted;
    vm.removeAll = removeAll;

    function addTodo(){
      var urgent = false;
      if(document.getElementById('urgentCheckbox').checked) {
        urgent = true;
        document.getElementById('urgentCheckbox').checked=false;
      }
      vm.todos.push({'name': vm.newTodo, 'done': false, 'urgent': urgent});
      vm.newTodo = '';
      vm.todos = vm.todos.sort(function(a,b){return a.urgent-b.urgent;}).reverse();
      console.log(vm.todos[0].name + ' added to todolist.');
    }

    function removeCompleted(){
      vm.todos = vm.todos.filter(function(item){
            return !item.done;
      });
      console.log('selected todos was deleted from todolist.');
    }

    function removeAll(){
      vm.todos = [];
      console.log('todolist was cleared.');
    }
  }
})();
