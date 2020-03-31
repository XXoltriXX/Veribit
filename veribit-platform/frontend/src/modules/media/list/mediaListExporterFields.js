import model from 'modules/media/mediaModel';

const { fields } = model;

export default [
  fields.id,
  fields.txid,
  fields.files,
  fields.images,
  fields.description,
  fields.createdAt,
  fields.updatedAt
];
