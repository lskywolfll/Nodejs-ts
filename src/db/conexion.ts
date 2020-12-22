import mongoose from 'mongoose';

const connection:any = {};

async function dbConnect(url:string) {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

    connection.isConnected = db.connections[0].readyState;

    console.log('[db] Conectada con éxito');
}

export default dbConnect;