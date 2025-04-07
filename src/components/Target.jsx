import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
    );

    useEffect(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: "+=0.5", // Move up by 0.5
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <group {...props} ref={targetRef}>
            <primitive object={scene} />
        </group>
    );
};

export default Target;
