var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  //Super Admins
  this.resource('admin', function(){
    //Projects
    this.resource('projects', function(){
      this.route('project', {path: '/:post_id'});
    });
    //Users
    this.resource('users');
    //Messages
    this.resource('messages', function(){
    	this.route('message', {path: ':message_id'});
    });
  });

  //Committee Members
  this.resource('committee', function(){
    //Projects
    this.resource('projects', function(){
      this.route('project', {path: '/:post_id'});
    });
    //Messages
    this.resource('messages', function(){
      this.route('message', {path: ':message_id'});
    });
  });

  //Users
  this.resource('user', function(){
      this.route('login');
      this.route('to-dos');
      this.route('messages');
      this.route('info');

  });
});

export default Router;
