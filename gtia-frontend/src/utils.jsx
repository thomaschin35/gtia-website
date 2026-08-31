// Utility functions for the project

export const scrollToElement = (e, elementId) => {
  e.preventDefault();
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};