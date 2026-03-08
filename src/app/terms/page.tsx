export default function Terms() {
    return (
        <div className="bg-black text-white">
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-red-600">Terms of Service</h1>
                    <p className="text-gray-300 mb-6">
                        Last updated: March 8, 2026
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-red-600">Description of Service</h2>
                    <p className="text-gray-300 mb-6">
                        AutoNews is an AI-powered autonomous TikTok news channel tool that automatically generates and posts news content to TikTok. The service monitors news sources, creates engaging video content using AI, and posts it directly to connected TikTok accounts without human intervention.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-red-600">Acceptable Use</h2>
                    <p className="text-gray-300 mb-6">
                        You agree to use AutoNews only for lawful purposes and in compliance with all applicable laws and regulations. You must not use the service to generate or distribute content that is illegal, harmful, defamatory, or violates the rights of others. AutoNews is intended for news content creation only.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-red-600">TikTok API Compliance</h2>
                    <p className="text-gray-300 mb-6">
                        AutoNews complies with all TikTok API terms of service and developer policies. The service only uses authorized API endpoints for content posting and does not access or store user data beyond what is necessary for the posting functionality. Users are responsible for ensuring their TikTok accounts comply with TikTok's community guidelines.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-red-600">No Warranty</h2>
                    <p className="text-gray-300 mb-6">
                        AutoNews is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, reliability, or availability of the service. The AI-generated content may contain errors or inaccuracies, and users should verify information before relying on it. We are not liable for any damages arising from the use of our service.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-red-600">Contact Us</h2>
                    <p className="text-gray-300 mb-6">
                        If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <p className="text-red-600 font-semibold">
                        contact@autonews.app
                    </p>
                </div>
            </section>
        </div>
    );
}