import axios from 'axios';

const fetchById = async (routeName, id) => {
  const res = await axios.get(`http://localhost:8080/${routeName}/${id}`);
  const data = await res.data;
  return data;
};

export default fetchById;
