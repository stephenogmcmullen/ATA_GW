const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  claimNumber: required("PA_CLAIM_NUMBER"),
  policyNumber: required("PA_POLICY_NUMBER"),
  lossDate: required("PA_LOSS_DATE"),
};
