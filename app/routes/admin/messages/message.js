import Message from '../../../models/message';

export default Ember.Route.extend({
  model: function(params){
    return Message.find(+params.message_id);
  }
});