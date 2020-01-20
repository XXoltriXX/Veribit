const userFixture = require('./userFixture');
const customerFixture = require('./customerFixture');
const productFixture = require('./productFixture');
const orderFixture = require('./orderFixture');
const mediaFixture = require('./mediaFixture');
const signFixture = require('./signFixture');
const shareFixture = require('./shareFixture');
const partnerFixture = require('./partnerFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  customer: customerFixture,
  product: productFixture,
  order: orderFixture,
  media: mediaFixture,
  sign: signFixture,
  share: shareFixture,
  partner: partnerFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
