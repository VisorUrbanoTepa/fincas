"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const indexcontrollers_1 = require("../controllers/indexcontrollers");
router.get('/predio', indexcontrollers_1.croqui.words),
    router.get('/predio/:id', indexcontrollers_1.croqui.getPrediobyid);
exports.default = router;
