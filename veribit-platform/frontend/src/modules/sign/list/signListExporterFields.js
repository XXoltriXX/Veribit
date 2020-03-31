import model from 'modules/sign/signModel';

const { fields } = model;

export default [
  fields.id,
  fields.txid,
  fields.documents,
  fields.createdAt,
  fields.updatedAt
];
