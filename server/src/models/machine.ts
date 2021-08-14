import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { payment, paymentId } from './payment';
import type { stock, stockId } from './stock';

export interface machineAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  address: string;
  created_at?: Date;
  updated_at?: Date;
}

export type machinePk = "id";
export type machineId = machine[machinePk];
export type machineCreationAttributes = Optional<machineAttributes, machinePk>;

export class machine extends Model<machineAttributes, machineCreationAttributes> implements machineAttributes {
  id!: number;
  username!: string;
  password!: string;
  email!: string;
  address!: string;
  created_at?: Date;
  updated_at?: Date;

  // machine hasMany payment via machine_id
  payments!: payment[];
  getPayments!: Sequelize.HasManyGetAssociationsMixin<payment>;
  setPayments!: Sequelize.HasManySetAssociationsMixin<payment, paymentId>;
  addPayment!: Sequelize.HasManyAddAssociationMixin<payment, paymentId>;
  addPayments!: Sequelize.HasManyAddAssociationsMixin<payment, paymentId>;
  createPayment!: Sequelize.HasManyCreateAssociationMixin<payment>;
  removePayment!: Sequelize.HasManyRemoveAssociationMixin<payment, paymentId>;
  removePayments!: Sequelize.HasManyRemoveAssociationsMixin<payment, paymentId>;
  hasPayment!: Sequelize.HasManyHasAssociationMixin<payment, paymentId>;
  hasPayments!: Sequelize.HasManyHasAssociationsMixin<payment, paymentId>;
  countPayments!: Sequelize.HasManyCountAssociationsMixin;
  // machine hasMany stock via machine_id
  stocks!: stock[];
  getStocks!: Sequelize.HasManyGetAssociationsMixin<stock>;
  setStocks!: Sequelize.HasManySetAssociationsMixin<stock, stockId>;
  addStock!: Sequelize.HasManyAddAssociationMixin<stock, stockId>;
  addStocks!: Sequelize.HasManyAddAssociationsMixin<stock, stockId>;
  createStock!: Sequelize.HasManyCreateAssociationMixin<stock>;
  removeStock!: Sequelize.HasManyRemoveAssociationMixin<stock, stockId>;
  removeStocks!: Sequelize.HasManyRemoveAssociationsMixin<stock, stockId>;
  hasStock!: Sequelize.HasManyHasAssociationMixin<stock, stockId>;
  hasStocks!: Sequelize.HasManyHasAssociationsMixin<stock, stockId>;
  countStocks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof machine {
    machine.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(200),
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
    tableName: 'machine',
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
    ]
  });
  return machine;
  }
}
