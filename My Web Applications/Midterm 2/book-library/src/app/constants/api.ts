const BASE_URL: string = 'https://www.googleapis.com/books/v1/';
const MY_VOLUMES_URL: string = 'https://book-library-9bca1.firebaseio.com';

export const API_REQUESTS = {
  search: {
    volumes: `${BASE_URL}volumes`,
  },
};

export const MY_VOLUMES_REQUESTS = {
  all: {
    myVolumes: `${MY_VOLUMES_URL}/my-books`,
  },
};
