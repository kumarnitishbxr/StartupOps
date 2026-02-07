import mongoose from 'mongoose'



async function main(){
    await mongoose.connect(process.env.DB_KEY);
    console.log('MongoDB connected & ready..')
}

export default main;