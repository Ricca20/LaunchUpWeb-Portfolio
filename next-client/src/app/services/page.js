import Services from '../../components/Services';
import Process from '../../components/Process';
import Pricing from '../../components/Pricing';

export const metadata = {
    title: "Web Design Services Sri Lanka | E-Commerce & SEO | LaunchUpWeb",
    description: "Expert web development services in Sri Lanka. From custom business websites to e-commerce stores and SEO, we verify your digital growth.",
};

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <Services />
            <Process />
            <Pricing />
        </div>
    );
}
