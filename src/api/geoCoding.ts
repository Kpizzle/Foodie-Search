import axios from 'axios';

export default axios.create({
  baseURL: 'https://geocode.maps.co',
  params: {
    api_key: '68a11eb8021fa909088723eok418e6c',
  },
});
