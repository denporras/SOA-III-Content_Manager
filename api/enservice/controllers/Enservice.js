'use strict';

/**
 * Enservice.js controller
 *
 * @description: A set of functions called "actions" for managing `Enservice`.
 */

module.exports = {

  /**
   * Retrieve enservice records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.enservice.search(ctx.query);
    } else {
      return strapi.services.enservice.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a enservice record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.enservice.fetch(ctx.params);
  },

  /**
   * Count enservice records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.enservice.count(ctx.query, populate);
  },

  /**
   * Create a/an enservice record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.enservice.add(ctx.request.body);
  },

  /**
   * Update a/an enservice record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.enservice.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an enservice record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.enservice.remove(ctx.params);
  }
};
