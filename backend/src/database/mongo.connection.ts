import {LoadEnv} from '../helpers';
import mongoose from 'mongoose';

const config = LoadEnv.API_MONGO_CONNECTION;

export class MongoConnection {
    public async connect() : Promise<void>{
        try {
            await mongoose.connect(config);
            console.log('Conectado ao mongo');
        } catch(error) {
            console.log(error);
        }
    }
}