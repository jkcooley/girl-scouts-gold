import Project from '../../models/project';

export default Ember.Route.extend({
  model: function(){
    return Project.find();
  }
});