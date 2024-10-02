module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('bank', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: {
        type: DataTypes.UUID,
        unique: true,
        allowNull: false,
      },
      user_id:{
        type: DataTypes.UUID,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      account_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      branch: {
        type: DataTypes.STRING,
      },
      owner_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ifsc: {
        type: DataTypes.STRING,
      },
      nominees: { type: DataTypes.ARRAY(DataTypes.JSONB) },
      created_by: { type: DataTypes.UUID },
      updated_by: { type: DataTypes.UUID },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('bank');
  },
};
