import { initializeDatabase } from './initializeQuestions';

const setup = async () => {
  console.log('Starting database initialization...');
  await initializeDatabase();
  console.log('Setup complete!');
};

setup();