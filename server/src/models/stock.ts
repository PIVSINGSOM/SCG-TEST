import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { machine, machineId } from './machine';
import type { product, productId } from './product';

export interface stockAttributes {
  id: number;
  machine_id: number;
  product_id: number;
  quantity: number;
  created_at?: Date;
  updated_at?: Date;
}

export type stockPk = "id";
export type stockId = stock[stockPk];
export type stockCreationAttributes = Optional<stockAttributes, stockPk>;

export class stock extends Model<stockAttributes, stockCreationAttributes> implements stockAttributes {
  id!: number;
  machine_id!: number;
  product_id!: number;
  quantity!: number;
  created_at?: Date;
  updated_at?: Date;

  // stock belongsTo machine via machine_id
  machine!: machine;
  getMachine!: Sequelize.BelongsToGetAssociationMixin<machine>;
  setMachine!: Sequelize.BelongsToSetAssociationMixin<machine, machineId>;
  createMachine!: Sequelize.BelongsToCreateAssociationMixin<machine>;
  // stock belongsTo product via product_id
  product!: product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof stock {
    stock.init({
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
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
    tableName: 'stock',
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
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
  return stock;
  }
}
