import model from 'modules/partner/partnerModel';

const { fields } = model;

export default [
  fields.id,
  fields.txid,
  fields.list,
  fields.createdAt,
  fields.updatedAt
];
