'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    
    const users = await queryInterface.sequelize.query(
      'SELECT id, name from "Users";',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    
    const assignId = (name) => users.find(user => user.name === name).id;
      
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Task 1',
        dueDate: new Date('2023-08-01'),
        completed: false,
        userId: assignId('John Doe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Task 2',
        dueDate: new Date('2023-08-05'),
        completed: true,
        userId: assignId('Jane Smith'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Task 3',
        dueDate: new Date('2023-08-10'),
        completed: false,
        userId: assignId('Bob Johnson'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
            {
        title: 'Task 4',
        dueDate: new Date('2023-08-15'),
        completed: false,
        userId: assignId('John Doe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Task 5',
        dueDate: new Date('2023-08-20'),
        completed: false,
        userId: assignId('Jane Smith'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
