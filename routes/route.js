import express from "express";
import { userLogin, userSignUp } from "../controller/user-controller.js";
import { getProducts, getProductByid } from "../controller/product-controller.js";
const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductByid);


export default router;