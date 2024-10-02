module.exports = (sequelize, DataTypes) => {
    const Bank = sequelize.define(
      'bank',
      {
        public_id: { 
          type: DataTypes.UUID, 
          unique: true, 
          allowNull: false
        },
        user_id: {
          type: DataTypes.UUID,
          unique: true,
          allowNull: false,
        },
        name: { type: DataTypes.STRING, allowNull: false, },
        code: { type: DataTypes.STRING, allowNull: false, },
        account_number: { type: DataTypes.STRING, unique: true, allowNull: false, },
        branch: { type: DataTypes.STRING },
        nominees: { type: DataTypes.ARRAY(DataTypes.JSONB) },
        owner_name: { type: DataTypes.STRING, allowNull: false, },
        ifsc: { type: DataTypes.STRING },
        created_by: { type: DataTypes.UUID },
        updated_by: { type: DataTypes.UUID },
      },
      {
        freezeTableName: true,
        underscored: true,
        timestamps: true,
      },
    );
  
    return Bank;
  };
  