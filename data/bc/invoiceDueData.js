const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  invoiceNumber: required("PA_INVOICE_NUMBER"),
  status: process.env.PA_INVOICE_STATUS || "Due",
};
