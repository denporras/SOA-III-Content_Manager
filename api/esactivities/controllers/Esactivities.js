'use strict';

/**
 * Esactivities.js controller
 *
 * @description: A set of functions called "actions" for managing `Esactivities`.
 */

module.exports = {

  /**
   * Retrieve esactivities records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.esactivities.search(ctx.query);
    } else {
      return strapi.services.esactivities.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a esactivities record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.esactivities.fetch(ctx.params);
  },

  /**
   * Count esactivities records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.esactivities.count(ctx.query, populate);
  },

  /**
   * Create a/an esactivities record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.esactivities.add(ctx.request.body);
  },

  /**
   * Update a/an esactivities record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.esactivities.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an esactivities record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.esactivities.remove(ctx.params);
  }
};
