const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  policyNumber: required("PA_POLICY_NUMBER"),
  type: required("PA_ACTIVITY_TYPE"),
  subject: required("PA_ACTIVITY_SUBJECT"),
  dueDate: required("PA_ACTIVITY_DUE_DATE"),
};
