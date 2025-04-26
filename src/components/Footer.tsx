export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-12 text-sm">
            {/* Section 1 - Email & flèche */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                <div className="text-2xl font-semibold">
                    zanakan12maniac@proton.me <span className="text-xl">↘</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-8">
                    <div>
                        🇫🇷<br />ZONE 01 ROUEN<br />
                    </div>
                </div>
            </div>

            {/* Ligne séparation + baseline */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-center sm:text-left">
                    © 2025 <span className="text-yellow-400">Raftandjani</span>. All Rights Reserved
                </p>

                <div className="flex gap-4 text-xs">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms And Conditions</a>
                </div>

                <a href="#" className="flex items-center gap-1 text-xs">
                    Back To Top <span className="text-white -white rounded-full w-5 h-5 flex justify-center items-center">↑</span>
                </a>
            </div>
        </footer>
    );
}
