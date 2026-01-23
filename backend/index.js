const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const cors = require("cors");


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/email", emailRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Email service running on port ${PORT}`));
