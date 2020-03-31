const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * Sign database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const SignSchema = new Schema(
  {
    txid: {
      type: String,
    },
    documents: [FileSchema],
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

SignSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

SignSchema.set('toJSON', {
  getters: true,
});

SignSchema.set('toObject', {
  getters: true,
});

const Sign = database.model('sign', SignSchema);

module.exports = Sign;
