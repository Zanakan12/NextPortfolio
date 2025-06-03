import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


export default function SkillCube({ position, url }: { position: [number, number, number]; url: string }) {
  const texture = useLoader(TextureLoader, url);

  return (
    <mesh position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      {/* Logo sur une face (face avant) */}
      <meshStandardMaterial attach="material-2" map={texture} />
      {/* Autres faces en gris */}
      <meshStandardMaterial attach="material-0" color="#444" />
      <meshStandardMaterial attach="material-1" color="#444" />
      <meshStandardMaterial attach="material-3" color="#444" />
      <meshStandardMaterial attach="material-4" color="#444" />
      <meshStandardMaterial attach="material-5" color="#444" />
    </mesh>
  );
}
