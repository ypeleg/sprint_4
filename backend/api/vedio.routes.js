

import express from 'express'
export const vedioRoutes = express.Router()
import { UUID } from 'mongodb'
import { v4  as uuidv4} from 'uuid'
vedioRoutes.get('/',(req,res)=>{
    
    res.json({ roomId: uuidv4() })
})
vedioRoutes.get('/:room',(req,res)=>{
    console.log('.:room')
    res.json({ roomId: req.params.room })
})