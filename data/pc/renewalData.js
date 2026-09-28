const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  priorPolicyNumber: required("PA_RENEWAL_POLICY"),
  effectiveDate: process.env.PA_RENEWAL_EFFECTIVE_DATE || "",
};
