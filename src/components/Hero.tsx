export default function Hero() {
    return (
        <section className="bg-black text-white py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    Breaking News, <span className="text-red-600">Generated Automatically</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    AI-powered autonomous TikTok news channel tool
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Coming Soon
                </button>
            </div>
        </section>
    );
}