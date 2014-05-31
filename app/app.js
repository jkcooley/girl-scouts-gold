import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'hack4-change', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'hack4-change');

export default App;
