import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="hidden md:flex gap-8 items-center text-sm font-bold text-white uppercase">
            <Link href="#project-slider">Project</Link>
            <Link href="#skills">Services</Link>
            <Link href="#service">Services</Link>
            <Link href="#about">COMPETENCES</Link>
            <Link href="#contact">Contact ME</Link>
        </nav>
    );
}
