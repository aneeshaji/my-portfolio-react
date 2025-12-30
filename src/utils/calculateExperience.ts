/**
 * Calculate years of experience from the start date to current date
 * @param startDate - The date you started your career (format: 'YYYY-MM-DD')
 * @returns String like "9+ Years Experience" or "10 Years Experience"
 */
export const calculateExperience = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();
  
  const yearsDiff = now.getFullYear() - start.getFullYear();
  const monthsDiff = now.getMonth() - start.getMonth();
  
  let totalYears = yearsDiff;
  
  // Adjust if we haven't reached the anniversary month yet
  if (monthsDiff < 0 || (monthsDiff === 0 && now.getDate() < start.getDate())) {
    totalYears--;
  }
  
  // Return formatted string
  if (totalYears >= 10) {
    return `${totalYears} Years Experience`;
  } else {
    return `${totalYears}+ Years Experience`;
  }
};
