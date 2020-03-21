import { Model, DataTypes } from 'sequelize';

class Booking extends Model {
  public id!: number;

  public date!: Date;

  public approved!: boolean;

  public user_id!: number;

  public spot_id!: number;

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
        date: {
          type: new DataTypes.DATE(),
        },
        approved: {
          type: DataTypes.BOOLEAN,
        },
        user_id: {
          type: new DataTypes.INTEGER(),
        },
        spot_id: {
          type: new DataTypes.INTEGER(),
        },
      },
      {
        tableName: 'bookings',
        sequelize,
      }
    );
    return this;
  }

  static associate(models: Array<Model>) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    this.belongsTo(models.Spot, {
      foreignKey: 'spot_id',
    });
  }
}

export default Booking;
