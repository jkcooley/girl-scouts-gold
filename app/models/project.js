var FIXTURES = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Twas brillig'
  }, {
    id: 2,
    name: 'Project 2',
    description: 'and the slithy toves'
  }, {
    id: 3,
    name: 'Project 3',
    description: 'did gyre and gimble'
  }, {
    id: 4,
    name: 'Project 4',
    description: 'in the wabe'
  }, {
    id: 5,
    name: 'Project 5',
    description: 'Beware the Jabberwock'
  }
];


var Project = Em.Object.extend();

Project.reopenClass({
  find: function(id) {
    if (id) {
      return FIXTURES.findBy('id', id);
    } else {
      return FIXTURES;
    }
  }
});

export default Project;
