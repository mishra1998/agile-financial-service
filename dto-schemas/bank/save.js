const save = {
    title: 'save bank details',
    description: 'Defines the structure for HTTP GET request body',
    type: 'object',
    properties: {
        name: {
        type: 'string',
        description: 'Name of the bank',
      },
      code: {
        type: 'string',
        description: 'Code of the bank',
      },
      accountNumber: {
        type: 'string',
        description: 'account number of the users bank',
      },
      branch:{
        type: 'string',
        description: 'branch of the users bank',
      },
      ownerName:{
        type: 'string',
        description: 'owner name of the users bank',
      },
      ifsc:{
        type: 'string',
        description: 'ifsc name of the users bank',
      },
      nominees: {
        type: 'array',
        items: {
          type: 'object',
          required: [ 'name' ],
          properties: {
            name: {
              type: 'string',
              description: 'name',
            },
            mobileNumber: {
              type: 'string',
            },
            dob: {
              type: [ 'string', 'null' ],
              description: 'dob of birth',
              oneOf: [
                {
                  format: 'date',
                },
              ],
            },
            email: {
              type: [ 'string', 'null' ],
              format: 'email',
              maxLength: 50,
              minLength: 2,
              transform: [ 'trim', 'toLowerCase' ],
            },
            relationship: {
              type: 'string',
            }
          },
        },
      },
      createdBy: {
        type: 'string',
        description: 'userId',
        format: 'uuid',
      },
    },
    required: [ 'name','accountNumber','branch','ownerName', 'ifsc'  ],
    additionalProperties: false,
    errorMessage: {
      properties: {
        name: 'Parameter: name should be a valid',
        account_number:'Parameter: account number should be a valid',
        branch:'Parameter: branch should be a valid',
        owner_name:'Parameter: owner name should be a valid',
        ifsc:'Parameter: ifsc should be a valid',
        nominees:'Parameter: nominees should be a valid',
        createdBy:'Parameter: createdBy should be a valid'
      },
      required: {
        name: 'Parameter: name is required in params',
        account_number:'Parameter: account number is required in params',
        branch:'Parameter: branch is required in params',
        owner_name:'Parameter: owner name is required in params',
        ifsc:'Parameter: ifsc is required in params'
      },
    },
  };
  
  module.exports = save;
  