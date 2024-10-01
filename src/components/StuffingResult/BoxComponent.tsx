import { Edges } from "@react-three/drei";
import { useRef } from "react";

export const Box = ({
  color,
  position,
  size,
}: {
  color: any;
  position: any;
  size: any;
}) => {
  const mesh: any = useRef();
  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
      <Edges color="black" />
    </mesh>
  );
};
