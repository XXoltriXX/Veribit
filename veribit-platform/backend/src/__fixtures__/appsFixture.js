const genericFixture = require('./genericFixture');
const AppsRepository = require('../database/repositories/appsRepository');

const appsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new AppsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = appsFixture;
