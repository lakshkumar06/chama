import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

const Earth = () => {
  const earthRef = useRef();
  const scrollY = useRef(0);
  const previousScrollY = useRef(0);
  const scrollSpeed = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      previousScrollY.current = scrollY.current;
      scrollY.current = window.scrollY;
      scrollSpeed.current = scrollY.current - previousScrollY.current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((_, delta) => {
    if (earthRef.current) {
      const baseSpeed = 0.07 * delta; // Slow constant rotation
      const scrollSpeedValue = scrollSpeed.current * 0.08 * delta; // Speed boost from scroll
      earthRef.current.rotation.y += baseSpeed + scrollSpeedValue;
      scrollSpeed.current = 0; // Reset scroll speed after applying it
    }
  });

  const texture = new TextureLoader().load("/image.png");

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[3, 128, 128]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default function Hero() {
  return (
        <div className="bg-black">
         <div className="relative w-full h-[120vh] overflow-hidden">
            <div className="absolute inset-0 ">
              <div className="relative flex h-full w-full justify-end right-[-30vw] top-[20vh]">
              <Canvas className=" w-screen ">
              <ambientLight intensity={4} />
              <directionalLight position={[5, 3, 5]} intensity={2} />
              
              <Earth/>
              <OrbitControls enableZoom={false} />
            </Canvas>
            </div>
            </div>
    
          <div className="relative w-[90%] mx-auto py-[20vh] font-funnel">
              <h1 className="text-white font-bold font-orbitron text-[64px] leading-[1.2em]">Decentralized Savings & <br/>Lending for Millions </h1>
              <p className="text-blue-500 font-funnel text-[32px]">Transparent. Trustless. Global.</p>

              <div className="flex gap-[2em] mt-[2em]">
              <a href="" className="bg-blue-500 text-white flex w-fit text-[26px] gap-[0.5em] align-middle rounded-[100px] px-[20px] py-[5px] font-funnel">
                <div className="flexCol leading-[1em]">+</div>
              <div className="flexCol">Join a Pool</div>
              <div className="flexCol">
                <svg className="w-[0.8em]" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5346 6.526C12.8251 6.23074 12.8213 5.75588 12.526 5.46538L7.7144 0.731357C7.41913 0.440854 6.94427 0.444713 6.65377 0.739977C6.36327 1.03524 6.36713 1.5101 6.66239 1.8006L10.9394 6.00862L6.73136 10.2856C6.44085 10.5809 6.44471 11.0557 6.73998 11.3462C7.03524 11.6367 7.5101 11.6329 7.8006 11.3376L12.5346 6.526ZM0.00609568 6.84751L12.0061 6.74998L11.9939 5.25002L-0.00609568 5.34756L0.00609568 6.84751Z" fill="white"/>
              </svg>
              </div></a>

              <a href="" className="border-[2px] border-blue-500 text-white flex w-fit text-[26px] gap-[0.5em] rounded-[100px] px-[20px] py-[5px] font-funnel">
              
              <div className="flexCol">Learn More</div>
              <div className="flexCol">
              <svg className="h-[0.8em]" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.46967 12.5793C5.76256 12.8722 6.23744 12.8722 6.53033 12.5793L11.3033 7.80634C11.5962 7.51345 11.5962 7.03857 11.3033 6.74568C11.0104 6.45279 10.5355 6.45279 10.2426 6.74568L6 10.9883L1.75736 6.74568C1.46447 6.45279 0.989593 6.45279 0.696699 6.74568C0.403806 7.03857 0.403806 7.51345 0.696699 7.80634L5.46967 12.5793ZM5.25 0.048584L5.25 12.049H6.75L6.75 0.048584L5.25 0.048584Z" fill="white"/>
  </svg>

              </div></a>
              </div>

              <div className="bg-gray-800 lightGrayBg text-white p-[15px] rounded-[20px] w-fit mt-[50px]">
                <div className="flex text-[24px] gap-[0.3em]">
                  <div className="flexCol"><svg className="h-[1.5em]" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.5 19H9.5C7.29086 19 5.5 17.2091 5.5 15V5" stroke="#00ff6e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.619 7.25C15.2048 7.25 14.869 7.58579 14.869 8C14.869 8.41421 15.2048 8.75 15.619 8.75V7.25ZM19.5 8.75C19.9142 8.75 20.25 8.41421 20.25 8C20.25 7.58579 19.9142 7.25 19.5 7.25V8.75ZM20.25 8C20.25 7.58579 19.9142 7.25 19.5 7.25C19.0858 7.25 18.75 7.58579 18.75 8H20.25ZM18.75 11.607C18.75 12.0212 19.0858 12.357 19.5 12.357C19.9142 12.357 20.25 12.0212 20.25 11.607H18.75ZM20.0765 8.47973C20.3414 8.16133 20.2981 7.68844 19.9797 7.42349C19.6613 7.15855 19.1884 7.20188 18.9235 7.52027L20.0765 8.47973ZM15.5 12.807L16.0038 13.3626C16.0298 13.339 16.054 13.3137 16.0765 13.2867L15.5 12.807ZM13.931 12.868L13.4663 13.4567L13.4718 13.461L13.931 12.868ZM12.882 12.04L13.3467 11.4513L13.3429 11.4483L12.882 12.04ZM11.2 12.223L10.6226 11.7443C10.6152 11.7532 10.608 11.7623 10.601 11.7716L11.2 12.223ZM11.072 12.375L11.6074 12.9002C11.6112 12.8963 11.615 12.8923 11.6187 12.8884L11.072 12.375ZM7.83052 14.6088C7.54048 14.9046 7.54508 15.3794 7.8408 15.6694C8.13652 15.9595 8.61138 15.9549 8.90141 15.6592L7.83052 14.6088ZM15.619 8.75H19.5V7.25H15.619V8.75ZM18.75 8V11.607H20.25V8H18.75ZM18.9235 7.52027L14.9235 12.3273L16.0765 13.2867L20.0765 8.47973L18.9235 7.52027ZM14.9962 12.2514C14.8266 12.4052 14.5711 12.4151 14.3901 12.275L13.4718 13.461C14.228 14.0465 15.2953 14.005 16.0038 13.3626L14.9962 12.2514ZM14.3956 12.2793L13.3466 11.4513L12.4173 12.6287L13.4663 13.4567L14.3956 12.2793ZM13.3429 11.4483C12.5051 10.7957 11.3004 10.9268 10.6226 11.7443L11.7773 12.7017C11.9377 12.5082 12.2228 12.4772 12.4211 12.6317L13.3429 11.4483ZM10.601 11.7716C10.5774 11.8029 10.5521 11.833 10.5252 11.8616L11.6187 12.8884C11.6826 12.8203 11.7427 12.7489 11.7989 12.6744L10.601 11.7716ZM10.5365 11.8498L7.83052 14.6088L8.90141 15.6592L11.6074 12.9002L10.5365 11.8498Z" fill="#00ff6e"></path> </g></svg></div>
                  <div className="flexCol py-[0.5em]">
                    Live Chama Pools
                  </div>
                </div>

                <div className="flex gap-[1vw] ">
                  <div className=" lightGrayBg2 py-[1em] pl-[2em] rounded-[15px] min-w-[16vw]">
                    <p className="font-bold text-[36px] text-green-500">$1.2M</p>
                    <p className="text-[18px]">Active Pool</p>
                  </div>
                  <div className="lightGrayBg2 py-[1em] pl-[2em] rounded-[15px] min-w-[16vw]">
                    <p className="font-bold text-[36px] text-indigo-400">2423</p>
                    <p className="text-[18px]"> Members</p>
                  </div>
                  <div className="lightGrayBg2 py-[1em] pl-[2em] rounded-[15px] min-w-[16vw]">
                    <p className="font-bold text-[36px] text-orange-400">24.2K</p>
                    <p className="text-[18px]">Transactions</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>
  );
}
