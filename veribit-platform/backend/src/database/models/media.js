const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * Media database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const MediaSchema = new Schema(
  {
    txid: {
      type: String,
    },
    files: [FileSchema],
    images: [FileSchema],
    description: {
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

MediaSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

MediaSchema.set('toJSON', {
  getters: true,
});

MediaSchema.set('toObject', {
  getters: true,
});

const Media = database.model('media', MediaSchema);

module.exports = Media;
