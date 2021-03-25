import axios from 'axios';

export const getStats = async (id) => {
  const res = await axios.post('http://localhost:9000/api/getStatsById', {id: id})
  return res.data;
};

export const getNames = async (id) => {
  const res = await axios.post('http://localhost:9000/api/getPlayerNamesById', {id: id})
  return res.data;
};

export const matchPlayerWithId = async (name, id) => {
  const res = await axios.post('http://localhost:9000/api/getMatchPlayerAndId',
  {name: name, id: id})
  return res.data;
}
