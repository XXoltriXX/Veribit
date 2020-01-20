const database = require('../database');
const Schema = database.Schema;

/**
 * Share database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ShareSchema = new Schema(
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

ShareSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ShareSchema.set('toJSON', {
  getters: true,
});

ShareSchema.set('toObject', {
  getters: true,
});

const Share = database.model('share', ShareSchema);

module.exports = Share;
