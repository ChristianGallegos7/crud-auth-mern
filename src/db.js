import mongoose from 'mongoose'

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://christian:christian@cluster0.zpabqui.mongodb.net/?retryWrites=true&w=majority');

        console.log('>>> DB is connected'); 
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);

    }
}