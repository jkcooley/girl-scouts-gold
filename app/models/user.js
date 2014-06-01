var FIXTURES = [
  {
    id: 1,
    name: 'Olivia'
  }, {
    id: 2,
    name: 'Ashley'
  }, {
    id: 3,
    name: 'Christine'
  }
];


var User = Em.Object.extend();

User.reopenClass({
  find: function(id) {
    if (id) {
      return FIXTURES.findBy('id', id);
    } else {
      return FIXTURES;
    }
  }
});

export default User;
