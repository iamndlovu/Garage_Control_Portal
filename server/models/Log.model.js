const { Schema, model } = require('mongoose');

const LogSchema = new Schema(
  {
    user: { type: String, required: true },
  },
  { timestamps: true }
);

const Log = model('Log', LogSchema);

module.exports = Log;
