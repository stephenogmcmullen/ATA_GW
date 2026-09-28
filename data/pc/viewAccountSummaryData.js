const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  accountNumber: required("PA_ACCOUNT"),
  insuredName: required("PA_INSURED_NAME"),
  policyNumber: required("PA_POLICY_NUMBER"),
};
