const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required test-data environment variable: ${name}`);
  return value;
};

export default {
  quoteNumber: required("PA_QUOTE_NUMBER"),
  paymentMethod: process.env.PA_PAYMENT_METHOD || "",
};
