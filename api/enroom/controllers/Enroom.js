'use strict';

/**
 * Enroom.js controller
 *
 * @description: A set of functions called "actions" for managing `Enroom`.
 */

module.exports = {

  /**
   * Retrieve enroom records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.enroom.search(ctx.query);
    } else {
      return strapi.services.enroom.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a enroom record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.enroom.fetch(ctx.params);
  },

  /**
   * Count enroom records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.enroom.count(ctx.query, populate);
  },

  /**
   * Create a/an enroom record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.enroom.add(ctx.request.body);
  },

  /**
   * Update a/an enroom record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.enroom.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an enroom record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.enroom.remove(ctx.params);
  }
};
