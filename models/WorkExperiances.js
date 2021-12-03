import mongoose from "mongoose";

const WorkExperiancesSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobField: {
    type: String,
  },
  jobLocation: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  currentlyWork: {
    type: Boolean,
    default: false,
  },
  jobDescription: {
    type: String,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyAdress: {
    type: String,
  },
  companyIndustry: {
    type: String,
  },
  companySize: {
    type: Number,
  },
  companySector: {
    type: String,
  },
  supervisorName: {
    type: String,
  },
  supervisedEmployees: {
    type: String,
  },
  leavingReazon: {
    type: String,
  },
  startSalary: {
    type: Number,
  },
  endSalary: {
    type: Number,
  },
  currency: {
    type: String,
  },
});

var WorkExperiances = mongoose.model("workExperiances", WorkExperiancesSchema);

export default WorkExperiances;
