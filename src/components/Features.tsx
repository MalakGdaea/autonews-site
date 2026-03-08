export default function Features() {
    const features = [
        { title: 'Fully Autonomous', description: 'Runs 24/7 without human intervention, delivering news as it happens.' },
        { title: 'AI Voiceover', description: 'High-quality AI-generated voice narration for engaging content.' },
        { title: 'Auto-Post to TikTok', description: 'Seamlessly posts videos directly to your TikTok channel.' },
    ];

    return (
        <section className="bg-black text-white py-20 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center border border-gray-700 p-8 rounded-lg hover:border-red-600 transition-colors">
                            <h3 className="text-2xl font-semibold mb-4 text-red-600">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}