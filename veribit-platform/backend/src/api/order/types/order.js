const schema = `
  type Order {
    id: String!
    customer: Customer
    products: [ Product! ]
    employee: User
    delivered: Boolean
    attachments: [ File! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
