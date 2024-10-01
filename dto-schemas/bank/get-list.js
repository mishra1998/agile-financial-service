const getList = {
  title: 'get bank account list ',
  description: 'Defines the structure for HTTP GET request body',
  type: 'object',
  properties: {
    pageSize: {
      anyOf: [
        {
          type: 'string',
          pattern: '^[0-9]',
          minLength: 1,
          maxLength: 4,
        },
        {
          type: 'integer',
          minimum: 10,
          maximum: 1000,
        },
      ],
      description: 'pageSize.',
    },
    pageNumber: {
      description: 'pageNumber.',
      anyOf: [
        {
          type: 'string',
          pattern: '^[0-9]',
          minLength: 1,
          maxLength: 4,
        } ],
    },
  },
  additionalProperties: false,
};

module.exports = getList;
