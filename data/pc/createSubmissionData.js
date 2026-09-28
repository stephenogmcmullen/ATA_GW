const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  accountNumber: required("PA_ACCOUNT"),
  product: process.env.PA_PRODUCT || "PersonalAuto",
  effectiveDate: required("PA_EFFECTIVE_DATE"),
};
