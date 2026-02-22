/**
 * Formats a number as Indian Rupees (₹) with proper comma separation
 * Example: 124999 -> ₹1,24,999
 */
export const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount);
};
