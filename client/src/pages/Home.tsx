import { MonitorOff } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [typingEffect, setTypingEffect] = useState("");
  const text =
    "CCompile HTML, CSS, and JavaScript code on the go and share it with your friends.";

  useEffect(() => {
    setFadeIn(true);

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypingEffect((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-red-900 to-blue-800">
      <div className="absolute top-5 left-5 w-20 h-20 bg-white rounded-full flex justify-center items-center animate-spin-slow">
        <span className="text-black font-bold text-3xl">
          <MonitorOff size={46} />
        </span>
      </div>

      <h1
        className={`text-6xl font-bold text-center transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } mt-8 px-20`}
      >
        Joinode
      </h1>

      <p
        className={`text-gray-300 text-center text-md transition-opacity duration-1000 delay-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } pt-5 font-roboto`}
      >
        {typingEffect}
      </p>

      <div className="flex gap-8 mt-8">
        {/* Box 1 */}
        <div className="relative w-64 h-64 rounded-lg overflow-hidden bg-gray-800 shadow-lg animate-box-bounce">
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Image 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-white font-bold text-xl">Collaboration</span>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative w-64 h-64 rounded-lg overflow-hidden bg-gray-800 shadow-lg animate-box-bounce animation-delay-200">
          <img
            src="https://blog.codepen.io/wp-content/uploads/2019/05/topics.png"
            alt="Image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-white font-bold text-xl">Sharing</span>
          </div>
        </div>

        <div className="relative w-64 h-64 rounded-lg overflow-hidden bg-gray-800 shadow-lg animate-box-bounce animation-delay-200">
          <img
            src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171867_X85WpWCcMzNsoMWtMxiZQspKzaOwCyuK.jpg"
            alt="Image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-white font-bold text-xl">Showcase</span>
          </div>
        </div>

        <div className="relative w-64 h-64 rounded-lg overflow-hidden bg-gray-800 shadow-lg animate-box-bounce animation-delay-200">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/df0393196787291.Y3JvcCwxNjIwLDEyNjcsMCww.png"
            alt="Image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-white font-bold text-xl">Learning</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2">
        <div className="flex space-x-8">
          <span className="text-sm text-xl inline-block animate-bounce">
            Collaboration
          </span>
          <span className="text-sm text-xl inline-block animate-bounce">
            Sharing
          </span>
          <span className="text-sm text-xl inline-block animate-bounce">
            Experimentation
          </span>
          <span className="text-sm text-xl inline-block animate-bounce">
            Showcase
          </span>
          <span className="text-sm text-xl inline-block animate-bounce">
            Learning
          </span>
        </div>
      </div>
    </div>
  );
}
