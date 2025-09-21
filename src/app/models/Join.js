const { default: mongoose } = require("mongoose");

const JoinSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const JoinModel = mongoose.models.Join || mongoose.model("Join", JoinSchema);
export default JoinModel;
