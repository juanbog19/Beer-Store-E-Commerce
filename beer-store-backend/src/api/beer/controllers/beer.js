'use strict';

/**
 * beer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::beer.beer');
