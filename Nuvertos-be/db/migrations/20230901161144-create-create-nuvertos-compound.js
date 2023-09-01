'use strict';

/** @type {import('sequelize-cli').Migration} */

const tableName = 'create-nuvertos-compounds';
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
      compoundImageUrl: {
        type: Sequelize.STRING,
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
