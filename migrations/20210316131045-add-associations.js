'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Songs',
            'GameId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Games',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        )
    },

    down:
        async (queryInterface, Sequelize) => {
            return queryInterface.removeColumn(
                'Songs',
                'GameId'
            );
            /**
             * Add reverting commands here.
             *
             * Example:
             * await queryInterface.dropTable('users');
             */
        }
}
;
