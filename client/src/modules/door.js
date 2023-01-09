import axios from 'axios';

const door = {
  open: async userID => {
    try {
      const res = await axios.get(`http://localhost:8080/door/open/${userID}`);

      if (res.status === 200) {
        const logRes = await axios.get(`http://localhost:8080/logs`);
        if (logRes.status === 200) return [res.data, logRes.data];
        else throw new Error(logRes.data);
      } else throw new Error(res.data);
    } catch (err) {
      throw err;
    }
  },
  close: async () => {
    try {
      const res = await axios.get(`http://localhost:8080/door/close`);
      if (res.status === 200) return res.data;
      else throw new Error(res.data);
    } catch (err) {
      throw err;
    }
  },
};

export default door;
