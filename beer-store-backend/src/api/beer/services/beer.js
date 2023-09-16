'use strict';

/**
 * beer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beer.beer');
