import Activity from '../models/activity';

export default Ember.Route.extend({
  model: function(){
    return Activity.find();
  }
});