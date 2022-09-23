import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import "./App.css";

function App() {
  const [sunPosition, setSunPosition] = React.useState([
    { x: 100, y: 50, z: 20 }
  ]);

  // React.useEffect(() => {
  //   sunPosition.map((e) => {
  //     const sunInter = setTimeout(() => {
  //       for (let i = 0; i < e.y; i++) {
  //         setSunPosition({ x: 100, y: i, z: 20 });
  //         console.log(i);
  //       }
  //       return () => clearTimeout(sunInter);
  //     }, 6000);
  //   });
  // }, [sunPosition]);

  return (
    <Canvas>
      {/* {sunPosition.map((e, i) => {
        return <Sky key={i} sunPosition={[e.x, e.y, e.z]} />;
      })} */}
      <Sky sunPosition={[100, 100, 20]} distance={2000000} />
      <ambientLight intensity={0.5} />
      adding Physics
    </Canvas>
  );
}

export default App;
