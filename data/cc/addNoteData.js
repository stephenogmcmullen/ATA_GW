const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  claimNumber: required("PA_CLAIM_NUMBER"),
  subject: required("CC_NOTE_SUBJECT"),
  text: required("CC_NOTE_TEXT"),
};
