const express = require('express');
const notesRoutes = require("./routes/noteRoutes"); 
require('dotenv').config();

const app = express();



const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
