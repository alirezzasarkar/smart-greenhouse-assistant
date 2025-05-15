const RadioGroup = ({ label, name, options, selectedValue, onChange }) => {
  return (
    <div className="mt-6">
      <label className="block text-right text-sm font-medium text-gray-700 mb-4">
        {label}
      </label>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center text-sm mb-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              className="form-radio text-green-500 ml-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
