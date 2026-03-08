export default function CTA() {
    return (
        <section className="bg-red-600 text-white py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Coming Soon</h2>
                <p className="text-xl md:text-2xl mb-12 text-red-100">Be the first to know when AutoNews launches.</p>
                <button className="bg-white text-red-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Notify Me
                </button>
            </div>
        </section>
    );
}