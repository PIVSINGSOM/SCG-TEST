import type { Sequelize, Model } from "sequelize";
import { machine } from "./machine";
import type { machineAttributes, machineCreationAttributes } from "./machine";
import { order } from "./order";
import type { orderAttributes, orderCreationAttributes } from "./order";
import { payment } from "./payment";
import type { paymentAttributes, paymentCreationAttributes } from "./payment";
import { product } from "./product";
import type { productAttributes, productCreationAttributes } from "./product";
import { stock } from "./stock";
import type { stockAttributes, stockCreationAttributes } from "./stock";

export {
  machine,
  order,
  payment,
  product,
  stock,
};

export type {
  machineAttributes,
  machineCreationAttributes,
  orderAttributes,
  orderCreationAttributes,
  paymentAttributes,
  paymentCreationAttributes,
  productAttributes,
  productCreationAttributes,
  stockAttributes,
  stockCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  machine.initModel(sequelize);
  order.initModel(sequelize);
  payment.initModel(sequelize);
  product.initModel(sequelize);
  stock.initModel(sequelize);

  payment.belongsTo(machine, { as: "machine", foreignKey: "machine_id"});
  machine.hasMany(payment, { as: "payments", foreignKey: "machine_id"});
  stock.belongsTo(machine, { as: "machine", foreignKey: "machine_id"});
  machine.hasMany(stock, { as: "stocks", foreignKey: "machine_id"});
  order.belongsTo(payment, { as: "payment", foreignKey: "payment_id"});
  payment.hasMany(order, { as: "orders", foreignKey: "payment_id"});
  order.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order, { as: "orders", foreignKey: "product_id"});
  stock.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(stock, { as: "stocks", foreignKey: "product_id"});

  return {
    machine: machine,
    order: order,
    payment: payment,
    product: product,
    stock: stock,
  };
}
