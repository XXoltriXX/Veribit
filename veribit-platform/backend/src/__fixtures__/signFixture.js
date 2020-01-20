const genericFixture = require('./genericFixture');
const SignRepository = require('../database/repositories/signRepository');

const signFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new SignRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = signFixture;
