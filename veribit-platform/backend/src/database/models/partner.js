const database = require('../database');
const Schema = database.Schema;

/**
 * Partner database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const PartnerSchema = new Schema(
  {
    txid: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    importHash: { type: String },
  },
  { timestamps: true },
);

PartnerSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

PartnerSchema.set('toJSON', {
  getters: true,
});

PartnerSchema.set('toObject', {
  getters: true,
});

const Partner = database.model('partner', PartnerSchema);

module.exports = Partner;
