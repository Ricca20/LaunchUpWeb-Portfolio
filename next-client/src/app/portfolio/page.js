import Projects from '../../components/Projects';

export const metadata = {
    title: "Our Portfolio | Best Website Designs in Sri Lanka | LaunchUpWeb",
    description: "Explore our portfolio of stunning, fast-loading websites built for businesses in Sri Lanka and the UK using Next.js and modern tech.",
};

export default function PortfolioPage() {
    return (
        <div className="pt-20">
            <Projects />
        </div>
    );
}
