import Link from 'next/link';

const Navbar = () => {
    return (
        <>
        <nav className="fixed top-0 left-0 w-full z-50 border-b h-12 bg-blue-800/50  backdrop-blur-md  ">
            <div className="flex ">
                <h1 className='text-white'>Quran</h1>
                <div className='flex gap-2 justify-center'>
                    <Link href="/HeroPage" className='text-white'>Home</Link>
                    <Link href="/penjelasan" className='text-white'>About</Link>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;