import Message from '../models/message';

export default Ember.Route.extend({
  model: function(){
    return Message.find();
  }
});