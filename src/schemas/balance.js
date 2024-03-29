const mongoose = require('mongoose');
const balanceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildId: String,
    memberId: String,
    amount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Balance', balanceSchema, 'balances');