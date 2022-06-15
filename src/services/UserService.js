// need jsdoc
const axios = require('axios');

const getUser = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    throw Error;
  } catch (err) {
    return err;
  }
};
export default getUser;
