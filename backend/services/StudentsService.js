/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create new student
*
* studentBase StudentBase Student data
* returns Student
* */
const createStudent = ({ studentBase }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        studentBase,
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
* retrieve all students
*
* returns List
* */
const getStudents = () => new Promise(
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
  createStudent,
  getStudents,
};
