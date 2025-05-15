/**
 * Retrieves a value from localStorage by the given key.
 * Parses the stored JSON string back into a JavaScript object.
 * Returns null if the key does not exist or if an error occurs.
 *
 * @param {string} key - The key of the localStorage item to retrieve.
 * @returns {any|null} The parsed value from localStorage, or null if not found or on error.
 */

export const getLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting localStorage key:", key, error);
    return null;
  }
};

/**
 * Stores a value in localStorage under the given key.
 * Serializes the value to a JSON string before storing it.
 * Logs an error message to the console if an error occurs.
 *
 * @param {string} key - The key for the localStorage item to set.
 * @param {any} value - The value to store in localStorage.
 */

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting localStorage key:", key, error);
  }
};
