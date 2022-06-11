const { Router } = require("express");
const router = Router();
const adicionalesCtrl = require("../controller/adicionales.controller");


router.get( "/", adicionalesCtrl.getStart );

router.get( "/media/:id", adicionalesCtrl.getMedia);

router.get( "/media", adicionalesCtrl.getMedia);

router.get( "/apuntadas/:id", adicionalesCtrl.getApuntadas);

router.get( "/apuntadas", adicionalesCtrl.getApuntadas); 

router.get( "/impartidas/:id", adicionalesCtrl.getImpartidas);

router.get( "/impartidas", adicionalesCtrl.getImpartidas);

module.exports = router;