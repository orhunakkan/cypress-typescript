export const ApiEndpoints = {
  baseUrl: 'https://reqres.in/api',
  users: '/users',
  singleUser: (id: number) => `/users/${id}`,
  resources: '/unknown',
  singleResource: (id: number) => `/unknown/${id}`,
  register: '/register',
  login: '/login'
};
