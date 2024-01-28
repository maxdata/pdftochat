// user.ts

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    emailAddresses: Array<{ emailAddress: string }>;
  }
  
  export const currentUser = async (): Promise<User | null> => {
    return {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      emailAddresses: [{ emailAddress: 'johndoe@example.com' }],
    };
  };