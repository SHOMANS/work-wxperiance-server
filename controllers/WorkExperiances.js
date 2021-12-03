import mongoose from "mongoose";

import WorkExperiances from "../models/WorkExperiances.js";

export const getWorkExperiances = async (req, res) => {
  try {
    const WorkExperiancess = await WorkExperiances.find();

    res.status(200).json(WorkExperiancess);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createWorkExperiance = async (req, res) => {
  const {
    jobTitle,
    jobField,
    jobLocation,
    startDate,
    endDate,
    currentlyWork,
    jobDescription,
    companyName,
    companyAdress,
    companyIndustry,
    companySize,
    companySector,
    supervisorName,
    supervisedEmployees,
    leavingReazon,
    startSalary,
    endSalary,
    currency,
  } = req.body;

  const newWorkExperiances = new WorkExperiances({
    jobTitle,
    jobField,
    jobLocation,
    startDate,
    endDate,
    currentlyWork,
    jobDescription,
    companyName,
    companyAdress,
    companyIndustry,
    companySize,
    companySector,
    supervisorName,
    supervisedEmployees,
    leavingReazon,
    startSalary,
    endSalary,
    currency,
  });

  try {
    await newWorkExperiances.save();

    res.status(201).json(newWorkExperiances);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateWorkExperiance = async (req, res) => {
  const { id } = req.params;
  const {
    jobTitle,
    jobField,
    jobLocation,
    startDate,
    endDate,
    currentlyWork,
    jobDescription,
    companyAdress,
    companyName,
    companyIndustry,
    companySize,
    companySector,
    supervisorName,
    supervisedEmployees,
    leavingReazon,
    startSalary,
    endSalary,
    currency,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No WorkExperiance with id: ${id}`);

  const updatedWorkExperiance = {
    jobTitle,
    jobField,
    jobLocation,
    startDate,
    endDate,
    currentlyWork,
    jobDescription,
    companyAdress,
    companyName,
    companyIndustry,
    companySize,
    companySector,
    supervisorName,
    supervisedEmployees,
    leavingReazon,
    startSalary,
    endSalary,
    currency,
    _id: id,
  };

  await WorkExperiances.findByIdAndUpdate(id, updatedWorkExperiance, {
    new: true,
  });

  res.json(updatedWorkExperiance);
};

export const deleteWorkExperiance = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No WorkExperiance with id: ${id}`);

  await WorkExperiances.findByIdAndRemove(id);

  res.json({ message: "WorkExperiance deleted successfully." });
};
