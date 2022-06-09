const { Router } = require("express");
const router = Router();
const alumnosCtrl = require("../controller/alumnos.controller");
// const alumnosCtrl = require("../controller/profesionales.controller");

router.get( "/", profesionalesCtrl.getStart );

router.get( "/alumnos", profesionalesCtrl.getProfesionales );

router.get( "/alumnos/:id", profesionalesCtrl.getProfesionalesParams );

router.post( "/alumnos", profesionalesCtrl.postProfesionales );

router.put( "/alumnos", profesionalesCtrl.putProfesionales );

router.delete( "/alumnos", profesionalesCtrl.deleteProfesionales );


module.exports = router;