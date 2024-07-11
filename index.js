const app = require("express")();

const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  console.log("Feature feat-789");
  res.send("GET request is working");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
