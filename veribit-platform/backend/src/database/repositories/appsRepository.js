const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Apps = require('../models/apps');

/**
 * Handles database operations for the Apps.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class AppsRepository {
  /**
   * Creates the Apps.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await Apps.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Apps.create(
      [
        {
          ...data,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        },
      ],
      MongooseRepository.getSessionOptionsIfExists(options),
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );



    return this.findById(record.id, options);
  }

  /**
   * Updates the Apps.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Apps.updateOne(
        { _id: id },
        {
          ...data,
          updatedBy: MongooseRepository.getCurrentUser(
            options,
          ).id,
        },
      ),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    const record = await this.findById(id, options);



    return record;
  }

  /**
   * Deletes the Apps.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Apps.deleteOne({ _id: id }),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );


  }

  /**
   * Counts the number of Appss based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Apps.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the Apps and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Apps.findById(id),
      options,
    );
  }

  /**
   * Finds the Appss based on the query.
   * See https://mongoosejs.com/docs/queries.html to learn how
   * to customize the queries.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  async findAndCountAll(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    let criteria = {};

    if (filter) {
      if (filter.id) {
        criteria = {
          ...criteria,
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        };
      }

      if (filter.novi) {
        criteria = {
          ...criteria,
          novi: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.novi,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.levo) {
        criteria = {
          ...criteria,
          levo: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.levo,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.nosco) {
        criteria = {
          ...criteria,
          nosco: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.nosco,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.scio) {
        criteria = {
          ...criteria,
          scio: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.scio,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.disco) {
        criteria = {
          ...criteria,
          disco: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.disco,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.indicium) {
        criteria = {
          ...criteria,
          indicium: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.indicium,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.specto) {
        criteria = {
          ...criteria,
          specto: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.specto,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.intelligo) {
        criteria = {
          ...criteria,
          intelligo: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.intelligo,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.teneo) {
        criteria = {
          ...criteria,
          teneo: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.teneo,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.percipio) {
        criteria = {
          ...criteria,
          percipio: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.percipio,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.antikythera) {
        criteria = {
          ...criteria,
          antikythera: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.antikythera,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          criteria = {
            ...criteria,
            ['createdAt']: {
              ...criteria.createdAt,
              $gte: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          criteria = {
            ...criteria,
            ['createdAt']: {
              ...criteria.createdAt,
              $lte: end,
            },
          };
        }
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;

    const rows = await Apps.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort);

    const count = await Apps.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the Appss to populate the autocomplete.
   * See https://mongoosejs.com/docs/queries.html to learn how to
   * customize the query.
   *
   * @param {Object} search
   * @param {number} limit
   */
  async findAllAutocomplete(search, limit) {
    let criteria = {};

    if (search) {
      criteria = {
        $or: [
          { _id: MongooseQueryUtils.uuid(search) },

        ],
      };
    }

    const sort = MongooseQueryUtils.sort('id_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await Apps.find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record['id'],
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} id - The record id
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  async _createAuditLog(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: Apps.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = AppsRepository;
