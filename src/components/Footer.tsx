import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-6 md:mb-0 font-medium">
                        © 2026 AutoNews. Built with AI.
                    </p>
                    <nav className="space-x-8">
                        <Link href="/" className="hover:text-red-400 transition-colors duration-300 font-medium">Home</Link>
                        <Link href="/privacy" className="hover:text-red-400 transition-colors duration-300 font-medium">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-red-400 transition-colors duration-300 font-medium">Terms of Service</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}