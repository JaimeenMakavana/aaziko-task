import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./BoxComponent";

export const Container3D = ({ tableData }: any) => {
  const containerDimensions = { length: 10, height: 5, width: 5 };
  const grid = [];

  for (let x = 0; x < Math.floor(containerDimensions.length); x++) {
    grid[x] = [];
    for (let y = 0; y < Math.floor(containerDimensions.height); y++) {
      grid[x][y] = [];
      for (let z = 0; z < Math.floor(containerDimensions.width); z++) {
        grid[x][y][z] = false;
      }
    }
  }

  const canPlaceBox = (size, position) => {
    const [row, layer, column] = position;
    for (let x = 0; x < size[0]; x++) {
      for (let y = 0; y < size[1]; y++) {
        for (let z = 0; z < size[2]; z++) {
          if (
            row + x >= grid.length ||
            layer + y >= grid[0].length ||
            column + z >= grid[0][0].length ||
            grid[row + x][layer + y][column + z]
          ) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const placeBox = (size, position) => {
    const [row, layer, column] = position;
    for (let x = 0; x < size[0]; x++) {
      for (let y = 0; y < size[1]; y++) {
        for (let z = 0; z < size[2]; z++) {
          grid[row + x][layer + y][column + z] = true;
        }
      }
    }
  };

  return (
    <Canvas style={{ height: "400px", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />

      {/* Render the container */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry
          args={[
            containerDimensions.length,
            containerDimensions.height,
            containerDimensions.width,
          ]}
        />
        <meshStandardMaterial color="#ccc" wireframe />
      </mesh>

      {/* Render boxes inside the container */}
      {tableData.map((item: any, index: number) => {
        const positions = [];
        let placedCount = 0;

        // Try to place all packages of the item
        for (let i = 0; i < item.packages; i++) {
          // Find a suitable position
          let placed = false;
          for (
            let row = 0;
            row < Math.floor(containerDimensions.length);
            row++
          ) {
            for (
              let layer = 0;
              layer < Math.floor(containerDimensions.height);
              layer++
            ) {
              for (
                let column = 0;
                column < Math.floor(containerDimensions.width);
                column++
              ) {
                if (canPlaceBox(item.size, [row, layer, column])) {
                  const x =
                    row - containerDimensions.length / 2 + item.size[0] / 2;
                  const y =
                    layer - containerDimensions.height / 2 + item.size[1] / 2;
                  const z =
                    column - containerDimensions.width / 2 + item.size[2] / 2;

                  // Place the box and mark the grid
                  placeBox(item.size, [row, layer, column]);
                  positions.push(
                    <Box
                      key={`${index}-${placedCount}`}
                      color={item.color}
                      position={[x, y, z]}
                      size={item.size}
                    />
                  );
                  placedCount++;
                  placed = true; // Mark as placed
                  break; // Move to the next package
                }
              }
              if (placed) break; // Break outer loops if placed
            }
            if (placed) break; // Break outer loops if placed
          }
        }

        return positions;
      })}
    </Canvas>
  );
};
