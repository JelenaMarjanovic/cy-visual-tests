const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

const percyHealthCheck = require('@percy/cypress/task');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  on('task', percyHealthCheck);
};
