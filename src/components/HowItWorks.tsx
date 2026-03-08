export default function HowItWorks() {
    const steps = [
        { title: 'Monitor', description: 'Continuously monitor news sources for breaking stories.' },
        { title: 'Generate', description: 'AI generates engaging video content and scripts.' },
        { title: 'Post', description: 'Automatically post to TikTok with AI voiceover.' },
    ];

    return (
        <section className="bg-black text-white py-20 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-red-600">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                                {index + 1}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}