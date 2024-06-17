
// export default function Home() {
//   return (
//     <div className="w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col gap-3">
//       <h1 className="text-6xl font-bold text-center">Joinode</h1>
//       <p className=" text-gray-500 text-center">
//         Compiler HTML, CSS, JavaScript Code on the go and share it with your
//         friends
//       </p>

     
//     </div>
//   );
// }


import { useEffect, useState } from 'react';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [typingEffect, setTypingEffect] = useState('');
  const text = 'CCompile HTML, CSS, and JavaScript code on the go and share it with your friends.';

  useEffect(() => {
    setFadeIn(true);

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypingEffect(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Decreased interval for faster typing effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-60px)] text-white flex justify-center items-center flex-col gap-8 overflow-hidden bg-gradient-to-br from-red-800 to-dark-blue-800">
      {/* Rotating logo */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full flex justify-center items-center animate-spin-slow">
        <span className="text-black font-bold text-3xl">J</span>
      </div>

      <h1 className={`text-6xl font-bold text-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        Joinode
      </h1>
      <p className={`text-gray-300 text-center text-lg transition-opacity duration-1000 delay-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        {typingEffect}
      </p>

      <div className="flex gap-8 mt-8">
        {/* Box 1 */}
        <div className="w-64 h-64 bg-gray-800 rounded-lg flex justify-center items-center p-4 shadow-lg animate-box-bounce">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-coding-icon"></div>
        </div>
        
        {/* Box 2 */}
        <div className="w-64 h-64 bg-gray-800 rounded-lg flex justify-center items-center p-4 shadow-lg animate-box-bounce animation-delay-200">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-coding-icon"></div>
        </div>
      </div>

      {/* Text Animation */}
      <div className="absolute bottom-2">
        <div className="flex space-x-8">
          <span className="text-sm text-xl inline-block animate-bounce">Collaboration</span>
          <span className="text-sm text-xl inline-block animate-bounce">Sharing</span>
          <span className="text-sm text-xl inline-block animate-bounce">Experimentation</span>
          <span className="text-sm text-xl inline-block animate-bounce">Showcase</span>
          <span className="text-sm text-xl inline-block animate-bounce">Learning</span>
        </div>
      </div>
    </div>
  );
}
