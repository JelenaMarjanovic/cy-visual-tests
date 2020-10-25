const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};
