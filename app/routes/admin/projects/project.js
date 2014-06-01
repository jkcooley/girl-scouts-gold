import Project from '../../../models/project';

export default Ember.Route.extend({
  model: function(params){
    return Project.find(params.project_id);
  }
});