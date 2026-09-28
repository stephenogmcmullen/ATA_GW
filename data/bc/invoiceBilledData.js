const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  billingAccount: required("PA_BILLING_ACCOUNT"),
  billingPeriod: required("PA_BILLING_PERIOD"),
};
