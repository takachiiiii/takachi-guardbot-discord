const mongoose = require("mongoose");

const takachi_guard = mongoose.Schema({
    banlı: Array,
    owner: Array,
    bot: Array
});

module.exports = mongoose.model("Takachi Guard", takachi_guard);
