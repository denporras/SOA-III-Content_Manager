'use strict';

/**
 * Escontact.js controller
 *
 * @description: A set of functions called "actions" for managing `Escontact`.
 */

module.exports = {

  /**
   * Retrieve escontact records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.escontact.search(ctx.query);
    } else {
      return strapi.services.escontact.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a escontact record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.escontact.fetch(ctx.params);
  },

  /**
   * Count escontact records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.escontact.count(ctx.query, populate);
  },

  /**
   * Create a/an escontact record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.escontact.add(ctx.request.body);
  },

  /**
   * Update a/an escontact record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.escontact.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an escontact record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.escontact.remove(ctx.params);
  }
};
