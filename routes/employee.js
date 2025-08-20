import express from "express";

import {getAllEmployee, getEmployee, createEmployee, deleteEmployee, updateEmployee} from "../controllers/employee.js"

const router = express.Router();

router.get("/", getAllEmployee )

router.post("/", getEmployee )

router.get("/:id", createEmployee )

router.delete("/:id", deleteEmployee )


router.put("/:id", updateEmployee )

export default router;