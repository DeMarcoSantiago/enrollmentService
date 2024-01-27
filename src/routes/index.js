const { Router } = require('express');
const userRoutes = require("./userRoutes");
const notificationRoutes = require('./notificationRoutes');
const enrollmentRoutes = require("./enrollmentRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.use("/users", userRoutes)
router.use("/notifications", notificationRoutes)
router.use("/enrollment", enrollmentRoutes)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
 