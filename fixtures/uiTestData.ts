export interface UserData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: string;
  department: string;
  jobTitle: string;
  programmingLanguages: number[];
}

export const RegistrationData = {
  validUser: {
    firstName: 'John',
    lastName: 'Doe',
    username: `johndoe${Math.floor(Math.random() * 1000)}`,
    email: `john.doe${Math.floor(Math.random() * 1000)}@example.com`,
    password: 'Password!123',
    phone: '571-000-0000',
    birthday: '01/01/1990',
    gender: 'male',
    department: 'DE',
    jobTitle: 'Developer',
    programmingLanguages: [1, 2, 3] // C++, Java, JavaScript
  },

  invalidUser: {
    firstName: 'J', // too short
    lastName: 'D', // too short
    username: 'a', // too short
    email: 'invalid-email',
    password: 'pass', // too short
    phone: '123', // invalid format
    birthday: '13/13/2030', // invalid date
    gender: 'male',
    department: 'DE',
    jobTitle: 'Developer',
    programmingLanguages: [1]
  }
};
