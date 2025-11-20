require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()
const port = process.env.PORT || 3000

// Middleware de seguridad y utilidad
app.use(helmet())
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}))
app.use(express.json())

// --- Rutas ---
app.get('/', (req, res) => {
  res.status(200).json({ message: '¡Backend de Canchapp operativo!' });
})

// 2. Aquí es donde conectarás tus rutas de la API (ej. app.use('/api/complejos', complejosRoutes);)

// --- Inicialización del Servidor ---
const sequelize = require('./src/db/db')

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada correctamente')

    app.listen(port, () => {
      console.log(`🚀 Servidor Express escuchando en http://localhost:${port}`);
    })
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error)
  })