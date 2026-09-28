const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  claimNumber: required("PA_CLAIM_NUMBER"),
  type: required("CC_ACTIVITY_TYPE"),
  subject: required("CC_ACTIVITY_SUBJECT"),
  dueDate: required("CC_ACTIVITY_DUE_DATE"),
};
