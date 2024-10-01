const BankService = require('../service/bank');
const Validator = require('../utils/validator');
const { save: saveSchema, getList: getListSchema } = require('../dto-schemas/bank');

const save = async (req, res) => {
    try {
        const { body } = req;
        const { errors, data } = Validator.isSchemaValid({ data: body, schema: saveSchema });

        if (errors) {
            return res.badRequest('field-validation', errors);
          }

        const { errors: err, doc } = await BankService.save(data);

        if (doc) {
            const { publicId } = doc;

            res.setHeader('public-id', publicId);

            res.setHeader('message', 'successfully saved.');

            return res.status(201).json({ status: 'success', message: 'successfully saved.' });
        }

        return res.status(400).json({ status: 'error', message: 'Field validation failed', errors: err });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};

const getList = async (req, res) => {
    try {
      const { query } = req;
      const data = query;
  
      const { errors, data: validData } = Validator.isSchemaValid({ data, schema: getListSchema });
  
      if (errors) {
        return res.badRequest('field-validation', errors);
      }
  
      const { pageSize, pageNumber } = query;
      const limit = parseInt(pageSize) || 100;
      const offset = limit * ((parseInt(pageNumber) || 1) - 1);
  
      const { count, doc } = await BankService.getList({
        ...validData, limit, offset,
      });
  
      res.setHeader('x-coreplatform-paging-limit', limit);
      res.setHeader('x-coreplatform-total-records', count);
  
      return res.status(200).json(doc); ;
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
  };

module.exports = { save, getList };
