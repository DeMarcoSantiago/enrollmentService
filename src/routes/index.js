const { Router } = require('express');
const userRoutes = require("./userRoutes");
const notificationRoutes = require('./notificationRoutes');
const enrollmentRoutes = require("./enrollmentRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.use("/", userRoutes)
router.use("/", notificationRoutes)
router.use("/", enrollmentRoutes)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
 