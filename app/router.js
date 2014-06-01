var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  //Super Admins
  this.resource('admin', function(){
    //Projects
    this.resource('admin.projects', {path: '/projects'}, function(){
      this.route('project', {path: '/:post_id'});
    });
    //Users
    this.resource('admin.users', {path: '/users'});
    //Messages
    this.resource('admin.messages', {path: '/messages'}, function(){
    	this.route('message', {path: ':message_id'});
    });
  });

  //Committee Members
  this.resource('committee', function(){
    //Projects
    this.resource('committee.projects', {path: '/projects'}, function(){
      this.route('project', {path: '/:post_id'});
    });
    //Messages
    this.resource('committee.messages', {path: '/messages'}, function(){
      this.route('message', {path: ':message_id'});
    });
  });

  //Users
  this.resource('user', function(){
    this.route('to-dos');
    this.route('messages');
    this.route('submit');
    this.route('calendar');
  });
});

export default Router;
