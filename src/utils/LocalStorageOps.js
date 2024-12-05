export function setValueToStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getValueFromStore(key) {
  return JSON.parse(localStorage.getItem(key));
}
