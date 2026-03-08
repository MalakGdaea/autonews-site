import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-black text-white py-6 px-6 border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold text-red-600 tracking-tight">AutoNews</div>
                <nav className="space-x-8">
                    <Link href="/" className="hover:text-red-400 transition-colors duration-300 font-medium">Home</Link>
                    <Link href="/privacy" className="hover:text-red-400 transition-colors duration-300 font-medium">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-red-400 transition-colors duration-300 font-medium">Terms of Service</Link>
                </nav>
            </div>
        </header>
    );
}