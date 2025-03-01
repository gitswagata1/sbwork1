import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const setupAdmin = async () => {
  try {
    const email = 'admin@vitstudent.ac.in';
    const password = 'admin123'; // Change this to a secure password

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Admin account created:', userCredential.user.email);
  } catch (error) {
    console.error('Error creating admin:', error);
  }
};