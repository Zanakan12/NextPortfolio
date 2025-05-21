import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="hidden md:flex gap-8 items-center text-sm font-bold text-white uppercase">
            <Link href="#project-slider">Project</Link>
            <Link href="#skills">SKILLS</Link>
            <Link href="#service">COMPETENCES</Link>
            <Link href="#contact">Contact ME</Link>
            <Link
                        href="/cv-raftandjani.pdf"
                        download
                        className="inline-block bg-blue-400 text-black px-3 py-1 rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                        {"📄 CV"}
            </Link>
        </nav>
    );
}
