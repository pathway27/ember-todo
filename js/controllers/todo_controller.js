Todos.TodoController = Ember.ObjectController.extend({
  actions: {

    editTodo: function() {
      this.set('isEditing', true);
    },

    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTodo');
      } else {
        this.get('model').save();
      }
    },

    removeTodo: function() {
      // get todo instance
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  },

  isEditing: false,

  isCompleted: function(key, value) {
    var model = this.get('model');
    
    if (value === undefined) {
      // prop used at getter
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value
    }
    
  }.property('model.isCompleted')
});
