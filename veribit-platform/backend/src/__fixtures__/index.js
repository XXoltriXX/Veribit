const userFixture = require('./userFixture');
const appsFixture = require('./appsFixture');
const mediaFixture = require('./mediaFixture');
const signFixture = require('./signFixture');
const shareFixture = require('./shareFixture');
const productFixture = require('./productFixture');
const orderFixture = require('./orderFixture');
const partnerFixture = require('./partnerFixture');
const customerFixture = require('./customerFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  apps: appsFixture,
  media: mediaFixture,
  sign: signFixture,
  share: shareFixture,
  product: productFixture,
  order: orderFixture,
  partner: partnerFixture,
  customer: customerFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
