export const SetLocalStorage = (key, value) => {
  const data = localStorage.setItem(key, JSON.stringify(value));
  return data;
};

export const GetLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

export const ClearAllLocalStorage = () => {
  localStorage.clear();
};

export const ClearItemLocalStorage = (key) => {
  localStorage.removeItem(key);
};
