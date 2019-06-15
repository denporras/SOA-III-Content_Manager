'use strict';

/**
 * Esroom.js controller
 *
 * @description: A set of functions called "actions" for managing `Esroom`.
 */

module.exports = {

  /**
   * Retrieve esroom records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.esroom.search(ctx.query);
    } else {
      return strapi.services.esroom.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a esroom record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.esroom.fetch(ctx.params);
  },

  /**
   * Count esroom records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.esroom.count(ctx.query, populate);
  },

  /**
   * Create a/an esroom record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.esroom.add(ctx.request.body);
  },

  /**
   * Update a/an esroom record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.esroom.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an esroom record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.esroom.remove(ctx.params);
  }
};
