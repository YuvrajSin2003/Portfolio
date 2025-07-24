import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("yuvrajraghuvanshisingh@gmail.com");

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000); // Corrected syntax
    };


    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 h-full gap-5">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/me1-modified.png"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        {/* Text inside image container */}
                        <div>
                            <p className="grid-headtext ">Hi, I am Yuvraj</p>
                            <p className="grid-subtext">
                            Hello I'm Yuvraj Singh, an electronics engineer who has a keen interest in software development,
                             particularly data structures and web technologies. I have a strong interest in creating effective systems and am always learning new frameworks and tools.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container ">
                        <img
                            src="/assets/grid2.png"
                            alt="grid-2"
                            className="w-full sm:w-[276px] h-fit object-contain"
                        />
                        {/* Text inside image container */}
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                            Working mostly Java, JavaScript, Python, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, REST APIs, Git, Postman, React Three Fiber, DSA (Java)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showLabels
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                // labelsData={[{lng:77.3649, lat: 28.6280, size: 20, color: "red", text:"I am here" }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely across all time zones
                            </p>
                            <p className="grid-subtext">🌍 Work from Home
                            I do well in remote settings and like working with teams in different time zones. Willing to work from home and available across all time zones.</p>
                            <Button isBeam={true} containerClass="w-full mt-10" name="Contact Me" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for programming</p>
                            <p className="grid-subtext">I love programming and turning ideas into code that works. I like making websites that respond to users and change over time, learning about new web technologies, and coming up with clean, effective ways to fix problems. For me, programming is a never-ending journey of learning, making, and coming up with new ideas.</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full sm:w-[276px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center"> Contact Me </p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yuvrajraghuvanshisingh@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
