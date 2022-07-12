import axios from 'axios';

// Arxiv IDS have the following form YYMM.number where number is five digits or four
// 1912.04460
// We will only be searching by Arxiv IDS
const baseUrl = `http://export.arxiv.org/api/query?id_list`;

const getArticle = (arxivId) => (
  axios
    .get(`${baseUrl}=${arxivId}`)
    .then(response => { return response.data;})
);

export default getArticle;