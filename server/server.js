import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';



const app = express();
{/*- Purpose: Creates an instance of an Express application.
- Why: This app object is used to define routes, middleware, and server behavior
 */}

 await connectDB();

//Middlewares
app.use(cors())
{/*- Purpose: Applies the CORS middleware globally.
- Why: Ensures all incoming requests from other origins are allowed (unless restricted).
 */}
app.use(express.json())
{/*- Purpose: Parses incoming JSON payloads.
- Why: Allows your API to handle application/json requests and access req.body.
 */}


 //Routes
app.get('/', (req, res)=> res.send('API is Working'))
app.use('/api/admin', adminRouter )
app.use('/api/blog', blogRouter )

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
      console.log('Server is running on port' + PORT)
})

export default app;