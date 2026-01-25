import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Terms of Service | LaunchUpWeb',
    description: 'Terms of Service for LaunchUpWeb. Please read these terms carefully before using our services.',
};

export default function TermsOfService() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <h1 className="text-4xl font-black text-gray-900 mb-8">Terms of Service</h1>
                <div className="prose prose-lg prose-blue text-gray-600">
                    <p>Last updated: January 25, 2026</p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                    <h3>2. Services</h3>
                    <p>LaunchUpWeb provides web design, development, and related digital services. The specific scope of services for each client will be defined in a separate agreement or proposal.</p>

                    <h3>3. Intellectual Property</h3>
                    <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.</p>

                    <h3>4. Client Obligations</h3>
                    <p>Clients are responsible for providing necessary content, images, and feedback in a timely manner to facilitate the project's progress.</p>

                    <h3>5. Limitation of Liability</h3>
                    <p>LaunchUpWeb shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>

                    <h3>6. Contact Us</h3>
                    <p>If you have any questions about these Terms, please contact us at: <strong>Info@launchupweb.com</strong></p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
