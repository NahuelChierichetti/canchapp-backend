const { Sequelize } = require('sequelize');

// Usamos la URL completa proporcionada por Render (DATABASE_URL)
const connectionUrl = process.env.DATABASE_URL;

if (!connectionUrl) {
    // Esto es para que falle rápido si la variable no está configurada en Render o en el .env
    throw new Error("DATABASE_URL no está configurada en las variables de entorno.");
}

const sequelize = new Sequelize(connectionUrl, {
    logging: false, // Desactiva logs SQL por defecto
    dialectOptions: {
        // Configuración crucial para conexiones SSL en la nube (como Render)
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;