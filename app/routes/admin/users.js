import User from '../../models/user';

export default Ember.Route.extend({
  model: function(){
    return User.find();
  }
});