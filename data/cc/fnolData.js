const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  policyNumber: required("PA_POLICY_NUMBER"),
  lossDate: required("PA_LOSS_DATE"),
  lossLocation: required("PA_LOSS_LOCATION"),
  lossType: required("PA_LOSS_TYPE"),
  lossDescription: required("PA_LOSS_DESCRIPTION"),
  claimantName: required("PA_CLAIMANT_NAME"),
};
