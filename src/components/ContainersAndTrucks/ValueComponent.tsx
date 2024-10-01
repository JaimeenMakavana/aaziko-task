export const ValueComponent = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div>
      <label className="block text-gray-500">{label}</label>
      <input
        type="text"
        value={`${value} mm`}
        readOnly
        className="border p-1 bg-gray-100 text-gray-500 rounded-full max-w-[120px] text-center"
      />
    </div>
  );
};
