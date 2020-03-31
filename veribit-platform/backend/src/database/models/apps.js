const database = require('../database');
const Schema = database.Schema;

/**
 * Apps database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const AppsSchema = new Schema(
  {
    novi: {
      type: String,
    },
    levo: {
      type: String,
    },
    nosco: {
      type: String,
    },
    scio: {
      type: String,
    },
    disco: {
      type: String,
    },
    indicium: {
      type: String,
    },
    specto: {
      type: String,
    },
    intelligo: {
      type: String,
    },
    teneo: {
      type: String,
    },
    percipio: {
      type: String,
    },
    antikythera: {
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

AppsSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

AppsSchema.set('toJSON', {
  getters: true,
});

AppsSchema.set('toObject', {
  getters: true,
});

const Apps = database.model('apps', AppsSchema);

module.exports = Apps;
