import { Model, DataTypes } from 'sequelize';

class User extends Model {
  public id!: number;

  public email!: string;

  public name!: string;

  public password!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  static init(sequelize) {
    super.init(
      {
        id: {
          type: new DataTypes.INTEGER(),
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        password: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
      },
      {
        tableName: 'users',
        sequelize,
      }
    );
    return this;
  }
}

export default User;
