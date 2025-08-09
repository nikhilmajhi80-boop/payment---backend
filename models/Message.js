import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Message", messageSchema);
