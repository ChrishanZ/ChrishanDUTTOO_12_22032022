// need jsdoc
const axios = require('axios');

const getAverageSession = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`,
    );
    if (response.status === 200) {
      return response.data;
    }
    throw Error; // amène vers le catch
  } catch (err) {
    return err;
  }
};
export default getAverageSession;
