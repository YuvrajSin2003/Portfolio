import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense,} from "react";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    // Media queries for responsiveness
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const size = calculateSizes(isSmall , isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* Header Text */}
            <div className="w-full mx-auto flex flex-col sm:mt-16 mt-40 c-space gap-50 ">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hey! I am Yuvraj <span className="waving-hand"> 👋 </span>
                </p>
                <p className="hero_tag text-gray_gradient">Software Developer</p>
            </div>

            {/* 3D Scene */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full" shadows >
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera >
                            <HackerRoom
                                position={size.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                 scale={size.deskScale}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={[size.targetPosition[0] - 2, size.targetPosition[1] + 1, size.targetPosition[2]]} />
                            <ReactLogo position={size.reactLogoPosition} />
                            <Cube position={size.cubePosition} />
                            <Rings position={size.ringPosition} />
                        </group>

                        {/* Basic Lighting */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                     <Button name="Lets work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>

            </div>
        </section>
    );
};

export default Hero;
