const genericFixture = require('./genericFixture');
const MediaRepository = require('../database/repositories/mediaRepository');

const mediaFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new MediaRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = mediaFixture;
