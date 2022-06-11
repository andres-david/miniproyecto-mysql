const { Router } = require("express");
const router = Router();
const alumnosCtrl = require("../controller/alumnos.controller");


router.get( "/", alumnosCtrl.getStart );

router.get( "/alumnos/:id", alumnosCtrl.getAlumnos);

router.get( "/alumnos", alumnosCtrl.getAlumnos);

router.post( "/alumnos", alumnosCtrl.postAlumnos);

router.put( "/alumnos", alumnosCtrl.putAlumnos ); 

router.delete( "/alumnos", alumnosCtrl.deleteAlumno );


module.exports = router;