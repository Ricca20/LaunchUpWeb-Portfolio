import Contact from '../../components/Contact';
import FAQ from '../../components/FAQ';

export const metadata = {
    title: "Contact LaunchUpWeb | Web Designers in Puttalam",
    description: "Ready to start your project? Contact the best web design agency in Puttalam. Call +94 77 832 0044 for a free consultation.",
};

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Contact />
            <FAQ />
        </div>
    );
}
