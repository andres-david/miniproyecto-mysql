const { Router } = require("express");
const router = Router();
const notasCtrl = require("../controller/notas.controller");


router.get( "/", notasCtrl.getStart );

router.get( "/notas/:id", notasCtrl.getNotas);

router.get( "/notas", notasCtrl.getNotas);

router.post( "/notas", notasCtrl.postNotas);

router.put( "/notas", notasCtrl.putNotas); 

router.delete( "/notas", notasCtrl.deleteNota);


module.exports = router;