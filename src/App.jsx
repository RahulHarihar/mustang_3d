import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import "./App.css";
import { Bounds } from "@react-three/drei";

function Mustang() {
	const { scene } = useGLTF("/mustang.gltf");
	return <primitive object={scene} />;
}

function App() {
	return (
		<Canvas camera={{ fov: 100 }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 5, 5]} intensity={1} />
			<Bounds fit clip observe margin={1.2}>
				<Suspense
					fallback={
						<Html>
							<div>Loading...</div>
						</Html>
					}>
					<Mustang />
				</Suspense>
			</Bounds>
			<OrbitControls />
		</Canvas>
	);
}

export default App;
