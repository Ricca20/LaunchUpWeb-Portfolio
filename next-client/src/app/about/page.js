import About from '../../components/About';
import WhyChooseUs from '../../components/WhyChooseUs';

export const metadata = {
    title: "About Us | Web Design Agency Puttalam | LaunchUpWeb",
    description: "Learn about LaunchUpWeb, the leading web design agency in Puttalam, Sri Lanka. We are passionate about helping businesses grow online.",
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            <About />
            <WhyChooseUs />
        </div>
    );
}
