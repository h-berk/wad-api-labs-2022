import userModel from '../api/users/userModel.js';
import genreModel from '../api/genres/genreModel.js';
import users from './users.js';
import genres from './genres.js';
import dotenv from 'dotenv';

dotenv.config();

if (process.env.SEED_DB) {
    loadUsers();
  }

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await userModel.collection.insertMany(users);
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all genres in collection and inserts genres
async function loadGenres() {
    console.log('load genre Data');
    try {
      await genreModel.deleteMany();
      await genreModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genre Data: ${err}`);
    }
  }
  