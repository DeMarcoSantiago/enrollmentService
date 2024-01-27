const { User } = require('../db');

// Controller functions for user actions
const getAllUsers = async (req, res) => { /* ... */ };
const getUserById = async (req, res) => { /* ... */ };
const createUser = async (req, res) => { /* ... */ };
const updateUser = async (req, res) => { /* ... */ };
const deleteUser = async (req, res) => { /* ... */ };

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};