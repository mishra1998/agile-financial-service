const { bank: BankModel } = require('../models');
const { v1: uuidV1 } = require('uuid');
const Helper = require('../utils/helper');

const save = async (data) => {
    try {
        const { accountNumber } = data;

        const existingBank = await BankModel.findOne({ where: { account_number: accountNumber } });

        if (existingBank) {
            return { errors: [ { name: 'Bank', message: 'Account number already exists!' } ] };
        }

        const publicId = uuidV1();

         // this userId must be from the auth but there's no user table right now, so i just taking this as allownull is false
        // and the user can have more then one account or not we need to write that case

        const bankDoc = Helper.convertCamelToSnake({
            ...data,
            publicId,
            user_id: publicId  
        })

        await BankModel.create(bankDoc);

        return { doc: { publicId, message: 'successfully saved.' } };
    } catch (error) {
        return { err: error.message };
    }
};

const getList = async (payload) => {
    const { limit, offset } = payload;
  
    const response = await BankModel.findAndCountAll({
      limit,
      offset,
      order: [ [ 'created_at', 'DESC' ] ],
    });
  
    if (response) {
      const { rows, count } = response;
      const doc = rows.map((element) => Helper.convertSnakeToCamel(element.dataValues));
  
      return { count, doc };
    }
  
    return { count: 0, doc: [] };
  };

module.exports = { save, getList };
