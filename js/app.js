window.Todos = Ember.Application.create({
  LOG_TRANSITIONS: true, 

  LOG_TRANSITIONS_INTERNAL: true
});

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();