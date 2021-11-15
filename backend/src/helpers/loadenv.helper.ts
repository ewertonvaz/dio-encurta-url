import env from 'dotenv';

export class LoadEnv {
    static API_ENVIRONMENT='prod';
    static API_PORT='5000';
    static API_URL='http://node-server';
    static API_MONGO_CONNECTION='mongodb://root:example@mongo-backend:27017';
    
    public fromDotEnv = () => {
        //Carrega variáveis a partir do arquivo .env localizado na raiz da aplicação
        //console.log(env.config());
        env.config();
    }
}