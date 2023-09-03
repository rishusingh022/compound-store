'use strict';

/** @type {import('sequelize-cli').Migration} */

const tableName = 'nuvertosCompounds';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      compoundName: {
        type: Sequelize.STRING,
      },
      compoundDescription: {
        type: Sequelize.TEXT,
      },
      compoundImage: {
        type: Sequelize.STRING,
      },
      dateModified: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint(tableName, {
      fields: ['compoundName'],
      type: 'unique',
      name: 'unique_compoundName',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(tableName, 'unique_compoundName');
    await queryInterface.dropTable(tableName);
  },
};
