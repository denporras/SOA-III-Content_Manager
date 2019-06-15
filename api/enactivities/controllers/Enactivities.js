'use strict';

/**
 * Enactivities.js controller
 *
 * @description: A set of functions called "actions" for managing `Enactivities`.
 */

module.exports = {

  /**
   * Retrieve enactivities records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.enactivities.search(ctx.query);
    } else {
      return strapi.services.enactivities.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a enactivities record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.enactivities.fetch(ctx.params);
  },

  /**
   * Count enactivities records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.enactivities.count(ctx.query, populate);
  },

  /**
   * Create a/an enactivities record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.enactivities.add(ctx.request.body);
  },

  /**
   * Update a/an enactivities record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.enactivities.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an enactivities record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.enactivities.remove(ctx.params);
  }
};
