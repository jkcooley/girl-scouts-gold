var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('admin', function(){
    this.route('projects');
    this.route('project', {path: '/projects/:post_id'});
  });

  this.resource('user', function(){
    
  });
});

export default Router;
