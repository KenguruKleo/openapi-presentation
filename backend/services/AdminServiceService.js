/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Retrieve information about API.
* Retrieve information about API.
*
* returns inline_response_200
* */
const getApiInfo = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Reset all data.
* Reset all data.
*
* no response value expected for this operation
* */
const resetData = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getApiInfo,
  resetData,
};
