'use strict';

/**
 * Esservice.js controller
 *
 * @description: A set of functions called "actions" for managing `Esservice`.
 */

module.exports = {

  /**
   * Retrieve esservice records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.esservice.search(ctx.query);
    } else {
      return strapi.services.esservice.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a esservice record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.esservice.fetch(ctx.params);
  },

  /**
   * Count esservice records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.esservice.count(ctx.query, populate);
  },

  /**
   * Create a/an esservice record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.esservice.add(ctx.request.body);
  },

  /**
   * Update a/an esservice record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.esservice.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an esservice record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.esservice.remove(ctx.params);
  }
};
