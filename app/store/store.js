import { create } from 'zustand';

// Define the initial user object with default values
const initialUser = {
  email: '',
  name: '',
  regNo: '',
  roomNo: '',
  block: '',
  mess: '',
  contact: '',
};

const useUserStore = create((set) => ({
  user: initialUser,
  setUser: (user) => {
    set({ user });
    if (typeof window !== 'undefined'){
      localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
    }
  },
}));

// Retrieve user data from localStorage when initializing the store
if  (typeof window !== 'undefined'){
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    const parsedUser = JSON.parse(savedUser);
    useUserStore.setState({ user: parsedUser });
  }
}

export default useUserStore;
