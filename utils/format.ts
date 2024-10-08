export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};
