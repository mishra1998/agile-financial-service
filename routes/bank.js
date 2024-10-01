const { save, getList } = require('../controllers/bank');

module.exports = (router) => {
  router.post('/bank', save);
  router.get('/bank-details', getList)
};
