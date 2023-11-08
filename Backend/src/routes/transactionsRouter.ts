import express from "express";
import * as transaction from "../controllers/transactions";
import { auth } from "../middleware/auth";

const router = express.Router();

router.post("/airtime", auth, transaction.buyAirtime);

export default router;
