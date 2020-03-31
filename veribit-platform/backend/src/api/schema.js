/**
 * Maps all the Schema of the application.
 * More about the schema: https://www.apollographql.com/docs/graphql-tools/generate-schema/
 */

const makeExecutableSchema = require('graphql-tools')
  .makeExecutableSchema;
const resolvers = require('./resolvers');

const sharedTypes = require('./shared/types');

const settingsTypes = require('./settings/types');
const settingsQueries = require('./settings/queries');
const settingsMutations = require('./settings/mutations');

const authTypes = require('./auth/types');
const authQueries = require('./auth/queries');
const authMutations = require('./auth/mutations');

const iamTypes = require('./iam/types');
const iamQueries = require('./iam/queries');
const iamMutations = require('./iam/mutations');

const auditLogTypes = require('./auditLog/types');
const auditLogQueries = require('./auditLog/queries');
const auditLogMutations = require('./auditLog/mutations');

const appsTypes = require('./apps/types');
const appsQueries = require('./apps/queries');
const appsMutations = require('./apps/mutations');

const mediaTypes = require('./media/types');
const mediaQueries = require('./media/queries');
const mediaMutations = require('./media/mutations');

const signTypes = require('./sign/types');
const signQueries = require('./sign/queries');
const signMutations = require('./sign/mutations');

const shareTypes = require('./share/types');
const shareQueries = require('./share/queries');
const shareMutations = require('./share/mutations');

const productTypes = require('./product/types');
const productQueries = require('./product/queries');
const productMutations = require('./product/mutations');

const orderTypes = require('./order/types');
const orderQueries = require('./order/queries');
const orderMutations = require('./order/mutations');

const partnerTypes = require('./partner/types');
const partnerQueries = require('./partner/queries');
const partnerMutations = require('./partner/mutations');

const customerTypes = require('./customer/types');
const customerQueries = require('./customer/queries');
const customerMutations = require('./customer/mutations');

const types = [
  ...sharedTypes,
  ...iamTypes,
  ...authTypes,
  ...auditLogTypes,
  ...settingsTypes,
  ...appsTypes,
  ...mediaTypes,
  ...signTypes,
  ...shareTypes,
  ...productTypes,
  ...orderTypes,
  ...partnerTypes,
  ...customerTypes,
].map((type) => type.schema);

const mutations = [
  ...iamMutations,
  ...authMutations,
  ...auditLogMutations,
  ...settingsMutations,
  ...appsMutations,
  ...mediaMutations,
  ...signMutations,
  ...shareMutations,
  ...productMutations,
  ...orderMutations,
  ...partnerMutations,
  ...customerMutations,
].map((mutation) => mutation.schema);

const queries = [
  ...iamQueries,
  ...authQueries,
  ...auditLogQueries,
  ...settingsQueries,
  ...appsQueries,
  ...mediaQueries,
  ...signQueries,
  ...shareQueries,
  ...productQueries,
  ...orderQueries,
  ...partnerQueries,
  ...customerQueries,
].map((query) => query.schema);

const query = `
  type Query {
    ${queries.join('\n')}
  }
`;

const mutation = `
  type Mutation {
    ${mutations.join('\n')}
  }
`;

const schemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [schemaDefinition, query, mutation, ...types],
  resolvers,
});
