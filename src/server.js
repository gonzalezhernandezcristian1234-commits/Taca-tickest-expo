import app from './app.js';
import { PORT } from './config/env.js';

app.listen(PORT, ()=>{
    console.log(`Inventory API ejecutándose en http://localhost:${PORT}`);
    
});