const genericFixture = require('./genericFixture');
const PartnerRepository = require('../database/repositories/partnerRepository');

const partnerFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new PartnerRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = partnerFixture;
