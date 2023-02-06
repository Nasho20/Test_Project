export const getItemFromStorage = ({ key }) => {
  const value = localStorage.getItem(key);
  return value;
};

export const setItemOnStorage = ({ key, value }) => {
  localStorage.setItem(key, value);
};

export const removeItemFromStorage = ({ key }) => {
  localStorage.removeItem(key);
};
