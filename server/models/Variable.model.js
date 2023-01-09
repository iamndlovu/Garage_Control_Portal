const { Schema, model } = require('mongoose');

const VariableSchema = new Schema(
  {
    status: { type: Boolean, required: true },
    temp: { type: Number, required: true },
    hum: { type: Number, required: true },
    co2: { type: Number, required: true },
    dust: { type: Number, required: true },
  },
  { timestamps: true }
);

const Variable = model('Variable', VariableSchema);

module.exports = Variable;
