import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full z-50 border-b h-12 bg-blue-800/50  backdrop-blur-md  ">
      <div>

        <div>
          <h1 className="text-white">Quran</h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          
          <div className="bg-red-900 p-1 rounded-xl">

         
            <Link href="/Doa" className="text-white">
              Home
            </Link>
             </div>
            <Link href="/books" className="text-white">
              About
            </Link>
          
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
