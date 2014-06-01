var FIXTURES = [
  {
    id: 1,
    from: 'No idea',
    date: 'Today',
    subject: 'CATS',
    body: 'Cats are silly'
  }
];


var Message = Em.Object.extend();

Message.reopenClass({
  find: function(id) {
    if (id) {
      return FIXTURES.findBy('id', id);
    } else {
      return FIXTURES;
    }
  }
});

export default Message;
