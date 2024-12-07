

// Utility function to convert price
export const convertCurrency = (amount, conversionRate = 85) => {
  return (amount * conversionRate).toFixed(2);
};

// Format number as currency (INR in this case)
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

// Truncate the Product title to 20 Characters
export const truncateTitle = (title, maxLength = 40) => {
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + "...";
  }

  return title;
};
