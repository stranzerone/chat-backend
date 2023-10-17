import express from 'express'
import cors from 'cors'
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000','https://chatme-wetz.onrender.com'], credentials: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    console.log(username);
  
    try {
      const r = await axios.put('https://api.chatengine.io/users', {
        username: username,
        secret: username,
        first_name: username
      }, {
        headers: {
          "private-key": "f4a8cf94-ef30-4cd8-b00d-45dde8d515ef"
        },
        withCredentials: true
      });
  
      // Send a single response with a 200 status code if the request is successful
      res.status(200).json(r.data);
    } catch (e) {
      console.error(e);
  
      // Send a single response with a 500 status code if an error occurs
      res.status(500).json({ error: "An error occurred" });
    }
  });
  

app.listen(3001,()=>{
    console.log("server is running on 3001")
})