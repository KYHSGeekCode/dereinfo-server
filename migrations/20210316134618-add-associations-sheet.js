'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Sheets',
            'SongId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Songs',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        ).then(() => {
            return queryInterface.addColumn(
                'Sheets',
                'DifficultyId',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Difficulties',
                        key: 'id',
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            );
        })
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Sheets',
            'SongId'
        ).then(() => {
            return queryInterface.removeColumn(
                'Sheets',
                'DifficultyId'
            );
        });
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
