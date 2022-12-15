const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hell is working....");
})

app.listen(PORT,()=>{
  console.log("server is running on 5000");
})