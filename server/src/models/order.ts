import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { payment, paymentId } from './payment';
import type { product, productId } from './product';

export interface orderAttributes {
  id: number;
  payment_id: number;
  product_id: number;
  quantity: number;
  amount: number;
  created_at?: Date;
  updated_at?: Date;
}

export type orderPk = "id";
export type orderId = order[orderPk];
export type orderCreationAttributes = Optional<orderAttributes, orderPk>;

export class order extends Model<orderAttributes, orderCreationAttributes> implements orderAttributes {
  id!: number;
  payment_id!: number;
  product_id!: number;
  quantity!: number;
  amount!: number;
  created_at?: Date;
  updated_at?: Date;

  // order belongsTo payment via payment_id
  payment!: payment;
  getPayment!: Sequelize.BelongsToGetAssociationMixin<payment>;
  setPayment!: Sequelize.BelongsToSetAssociationMixin<payment, paymentId>;
  createPayment!: Sequelize.BelongsToCreateAssociationMixin<payment>;
  // order belongsTo product via product_id
  product!: product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof order {
    order.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payment',
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
    amount: {
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
    tableName: 'order',
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
        name: "payment_id",
        using: "BTREE",
        fields: [
          { name: "payment_id" },
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
  return order;
  }
}
