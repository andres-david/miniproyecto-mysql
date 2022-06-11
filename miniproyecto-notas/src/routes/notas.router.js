const { Router } = require("express");
const router = Router();
const notasCtrl = require("../controller/notas.controller");


router.get( "/", alumnosCtrl.getStart );

router.get( "/notas/:id", alumnosCtrl.getNotas);

router.get( "/notas", alumnosCtrl.getNotas);

router.post( "/notas", alumnosCtrl.postNotas);

router.put( "/notas", alumnosCtrl.putNotas); 

router.delete( "/notas", alumnosCtrl.deleteNota);


module.exports = router;