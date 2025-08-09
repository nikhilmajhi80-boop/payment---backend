import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  date: String,
  location: String,
  work: String,
  box: Number,
  autoCharges: Number,
  busCharges: Number,
  total: Number,
  grandTotal: Number,
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Payment", paymentSchema);
