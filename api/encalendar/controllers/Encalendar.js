'use strict';

/**
 * Encalendar.js controller
 *
 * @description: A set of functions called "actions" for managing `Encalendar`.
 */

module.exports = {

  /**
   * Retrieve encalendar records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.encalendar.search(ctx.query);
    } else {
      return strapi.services.encalendar.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a encalendar record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.encalendar.fetch(ctx.params);
  },

  /**
   * Count encalendar records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.encalendar.count(ctx.query, populate);
  },

  /**
   * Create a/an encalendar record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.encalendar.add(ctx.request.body);
  },

  /**
   * Update a/an encalendar record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.encalendar.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an encalendar record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.encalendar.remove(ctx.params);
  }
};
