'use strict';

/**
 * Encontact.js controller
 *
 * @description: A set of functions called "actions" for managing `Encontact`.
 */

module.exports = {

  /**
   * Retrieve encontact records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.encontact.search(ctx.query);
    } else {
      return strapi.services.encontact.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a encontact record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.encontact.fetch(ctx.params);
  },

  /**
   * Count encontact records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.encontact.count(ctx.query, populate);
  },

  /**
   * Create a/an encontact record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.encontact.add(ctx.request.body);
  },

  /**
   * Update a/an encontact record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.encontact.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an encontact record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.encontact.remove(ctx.params);
  }
};
