import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html
               as ="div"
               center
               style={{
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   flexDirection: 'column',
               }}
        >
            <span className="canvas-loader"/>
            {progress !== 100 && (
                <p style={{fontSize: 14, color: '#f1f1f1', marginTop: 4}}>
                    {progress > 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
                </p>
            )}
        </Html>
    );
};

export default CanvasLoader;
