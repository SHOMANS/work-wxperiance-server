import express from "express";

import {
  getWorkExperiances,
  createWorkExperiance,
  updateWorkExperiance,
  deleteWorkExperiance,
} from "../controllers/WorkExperiances.js";

const router = express.Router();

// import { validation } from "../middleware/validation.js";

router.get("/", getWorkExperiances);
router.post("/", createWorkExperiance);
router.put("/:id", updateWorkExperiance);
router.delete("/:id", deleteWorkExperiance);

export default router;
