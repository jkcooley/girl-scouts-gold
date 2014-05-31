var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.route('projects');
	this.route('project', {path: '/projects/:post_id'});
});

export default Router;
