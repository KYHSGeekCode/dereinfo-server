'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'PullRequests',
            'closed',
            {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            }
        )
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'PullRequests',
            'closedz'
        );
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
