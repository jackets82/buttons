export default function Home() {
  return (
    <div className=" flex flex-col gap-3 p-12 justify-center items-center bg-gray-100 w-screen h-screen">
      <div className=" cursor-pointer w-44 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden border-orange-500 border-4 rounded-full group shadow-md">
        <span className=" absolute bg-orange-500 w-48 h-48 flex items-center justify-center border-orange-500 -translate-x-full group-hover:translate-x-0 transition-all duration-150">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className=" w-full flex items-center justify-center relative group-hover:translate-x-40 text-orange-500 font-bold transition-all duration-150">
          Button Text
        </span>
      </div>

      <div className=" rounded bg-orange-500 px-5 py-2 relative overflow-hidden hover:bg-gradient-to-r cursor-pointer hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all duration-300 ease-out group">
        <span className=" absolute bg-white bg-opacity-10 w-8 h-40 -mt-12 top-0 right-0 rotate-12 translate-x-20 group-hover:-translate-x-32 transition-all duration-1000"></span>
        <span className=" relative">Button Text</span>
      </div>

      <a
        href="#_"
        class="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-mono font-medium tracking-tighter border-2 border-black hover:border-white text-black rounded-lg group transition-all duration-150"
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="relative">Button Text</span>
      </a>

      <a
        href="#_"
        class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-full hover:bg-white group hover:border-orange-500 hover:ring-2 hover:ring-orange-500 hover:ring-offset-0"
      >
        <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-orange-500">
          Button Text
        </span>
      </a>

      <a
        href="#_"
        class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group"
      >
        <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 group-hover:opacity-100"></span>
        {/* Top glass gradient */}
        <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
        {/* Bottom gradient */}
        <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        {/* Left gradient */}
        <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
        {/* Right gradient */}
        <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span class="relative">Button Text</span>
      </a>

      <a href="#_" class="relative px-5 py-2 font-medium text-white group">
        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-orange-500 group-hover:bg-orange-700 group-hover:skew-x-12"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-orange-700 group-hover:bg-orange-500 group-hover:-skew-x-12"></span>
        <span class="relative">Button Text</span>
      </a>
    </div>
  );
}
