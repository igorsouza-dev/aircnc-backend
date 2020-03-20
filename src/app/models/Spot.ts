import { Model, DataTypes } from 'sequelize';

class Spot extends Model {
  public id!: number;

  public thumbnail!: string;

  public company!: string;

  public price!: number;

  public techs!: string;

  public user_id!: number;

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
        user_id: {
          type: new DataTypes.INTEGER(),
        },
        thumbnail: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        company: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        price: {
          type: new DataTypes.FLOAT(),
          allowNull: false,
        },
        techs: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
      },
      {
        tableName: 'spots',
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  }
}

export default Spot;
