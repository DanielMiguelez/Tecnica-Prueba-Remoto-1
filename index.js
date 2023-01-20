const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", require("./routes/users"));
app.use("/accounts", require("./routes/accounts"));
app.use("/historials", require("./routes/historials"));
app.use("/lendings", require("./routes/lendings"));

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));

module.exports = app;
