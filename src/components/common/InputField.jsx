const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
};

export default InputField;
