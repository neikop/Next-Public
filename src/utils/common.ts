export const formatNumber = (number?: number, fractionDigits?: number, amountSmall?: boolean) => {
  if (amountSmall) {
    if (Number(number) > 0 && Number(number) < 0.01) return `< 0.01`;
  }
  return (number ?? 0).toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits ?? 2,
    maximumFractionDigits: fractionDigits ?? 2,
  });
};
