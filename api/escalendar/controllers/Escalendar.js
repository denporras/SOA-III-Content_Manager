'use strict';

/**
 * Escalendar.js controller
 *
 * @description: A set of functions called "actions" for managing `Escalendar`.
 */

module.exports = {

  /**
   * Retrieve escalendar records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.escalendar.search(ctx.query);
    } else {
      return strapi.services.escalendar.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a escalendar record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.escalendar.fetch(ctx.params);
  },

  /**
   * Count escalendar records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.escalendar.count(ctx.query, populate);
  },

  /**
   * Create a/an escalendar record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.escalendar.add(ctx.request.body);
  },

  /**
   * Update a/an escalendar record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.escalendar.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an escalendar record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.escalendar.remove(ctx.params);
  }
};
