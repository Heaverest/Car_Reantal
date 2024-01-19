const mongoose = require("mongoose");



const reservationsSchema = new mongoose.Schema({
    carType:[{type:Schema.Type.ObjectId, ref:"cars"}],
    pickUpDate: { type: Date, default: Date.now() },
    dropOffDate: { type: Date, default: Date.now() },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required: true
    },
})

const Reservations = mongoose.model("Reservations", reservationsSchema);