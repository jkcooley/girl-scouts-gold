var FIXTURES = [
  {
    id: 1,
    subject: 'New proposal',
    date: 'Today',
    needs_action: true
  }, {
    id: 2,
    subject: 'Final report uploaded',
    date: 'Today',
    needs_action: true
  }, {
    id: 3,
    subject: 'Committee member assigned',
    date: 'Today',
    needs_action: false
  }
];


var Activity = Em.Object.extend();

Activity.reopenClass({
  find: function(id) {
    if (id) {
      return FIXTURES.findBy('id', id);
    } else {
      return FIXTURES;
    }
  }
});

export default Activity;
