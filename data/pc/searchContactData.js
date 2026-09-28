const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  contactName: required("PA_CONTACT_NAME"),
};
