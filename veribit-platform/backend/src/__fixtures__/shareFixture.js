const genericFixture = require('./genericFixture');
const ShareRepository = require('../database/repositories/shareRepository');

const shareFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ShareRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = shareFixture;
