import Image from 'next/image';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 relative">
            {/* Logo + nom */}
            <div className="flex items-center gap-2 z-10">
                <Image src="/logo.png" alt="Yellow Panther" width={40} height={40} />
                <h1 className="text-white font-bold text-lg">
                    FULL <span className="text-gray-400">STACK DEVELOPER</span>
                </h1>
            </div>

            {/* Navbar + bouton visible en desktop */}
            <div className="hidden md:flex items-center gap-6 z-10">
                <Navbar />
            </div>

            {/* Menu mobile visible en dessous de md */}
            <div className="md:hidden z-10">
                <MobileMenu />
            </div>
        </header>
    );
}
