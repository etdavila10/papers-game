import axios from 'axios';

// Arxiv IDS have the following form YYMM.number where number is five digits or four
// 1912.04460
// We will only be searching by Arxiv IDS
const baseUrl = `http://137.184.79.17/random`;

const getArticles = () => (
  axios
    .get(baseUrl)
    .then(response => { return response.data;})
);

export default getArticles;
