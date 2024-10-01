import { FaShoppingBag } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";

export const CustomTable = () => {
  const tableData = [
    {
      color: "bg-blue-500",
      name: "Big bags",
      packages: 10,
      volume: "10.00 m3",
      weight: "9000.00 kg",
      icon: <FaShoppingBag />,
      size: [2, 2, 2], // [length, height, width]
    },
    {
      color: "bg-purple-500",
      name: "Sacks",
      packages: 100,
      volume: "13.50 m3",
      weight: "4500.00 kg",
      icon: <FaShoppingBag />,
      size: [1, 1, 1], // [length, height, width]
    },
    {
      color: "bg-green-500",
      name: "Boxes 1",
      packages: 80,
      volume: "4.80 m3",
      weight: "800.00 kg",
      icon: <GiCardboardBoxClosed />,
      size: [3, 3, 3], // [length, height, width]
    },
  ];

  return (
    <table className="w-full text-left mt-4">
      <thead>
        <tr className="text-gray-400 *:px-3">
          <th className="py-2">Name</th>
          <th className="py-2">Packages</th>
          <th className="py-2">Volume</th>
          <th className="py-2">Weight</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index} className="border-b *:px-3">
            <td className="space-x-2 py-2">
              <div>
                <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                <span className="font-bold text-black">{item.name}</span>
              </div>
            </td>
            <td className="space-x-2 py-2">
              <div className="flex justify-start items-center gap-2">
                {item.icon}
                {item.packages}
              </div>
            </td>
            <td className="py-2">{item.volume}</td>
            <td className="py-2">{item.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
