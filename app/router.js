var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('admin', function(){
    //Projects
    this.route('projects');
    this.route('project', {path: '/projects/:post_id'});
    //Users
    this.route('users');
    this.route('user', {path: '/users/:user_id'});
    //Messages
    this.resource('messages', function(){
    	this.route('message', {path: ':message_id'});
    });
  });


  this.resource('user', function(){
    
  });
});

export default Router;
