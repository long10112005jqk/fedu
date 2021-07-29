import axios from 'axios';

const url = 'https://projectfedu.herokuapp.com/getDataDesign';

export const getDataDesign = () => axios.get(url);
