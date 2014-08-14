Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get todo title set by the newTitle value
      var title = this.get('newTitle');
      if (!title) { return false; }
      if (!title.trim()) { return; }
      
      // Create new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });
      
      // Clear the input field
      this.set('newTitle', '');
      
      //save new model
      todo.save();
    }
  },

  remaining: function() {
    // this is our array of todos
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'), // any changes to isCompleted of any todo will re run

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'todo' : 'todos';
  }.property('remaining')
})
