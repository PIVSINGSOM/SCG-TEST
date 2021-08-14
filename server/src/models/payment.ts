import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { machine, machineId } from './machine';
import type { order, orderId } from './order';

export interface paymentAttributes {
  id: number;
  machine_id: number;
  amount: string;
  created_at?: Date;
  updated_at?: Date;
}

export type paymentPk = "id";
export type paymentId = payment[paymentPk];
export type paymentCreationAttributes = Optional<paymentAttributes, paymentPk>;

export class payment extends Model<paymentAttributes, paymentCreationAttributes> implements paymentAttributes {
  id!: number;
  machine_id!: number;
  amount!: string;
  created_at?: Date;
  updated_at?: Date;

  // payment belongsTo machine via machine_id
  machine!: machine;
  getMachine!: Sequelize.BelongsToGetAssociationMixin<machine>;
  setMachine!: Sequelize.BelongsToSetAssociationMixin<machine, machineId>;
  createMachine!: Sequelize.BelongsToCreateAssociationMixin<machine>;
  // payment hasMany order via payment_id
  orders!: order[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<order>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<order, orderId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<order, orderId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<order, orderId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<order>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<order, orderId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<order, orderId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<order, orderId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<order, orderId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment {
    payment.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    machine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'machine',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "machine_id",
        using: "BTREE",
        fields: [
          { name: "machine_id" },
        ]
      },
    ]
  });
  return payment;
  }
}
