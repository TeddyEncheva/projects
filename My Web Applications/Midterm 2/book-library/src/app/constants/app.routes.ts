export const APP_ROUTES = {
  search: {
    path: 'search',
  },
  volumes: {
    path: 'volumes',
    children: {
      details: 'details',
      myVolumes: 'my-volumes'
    },
  },
  authentication: {
    path: 'auth',
    children:{
      login: 'login',
    }
  }
};
