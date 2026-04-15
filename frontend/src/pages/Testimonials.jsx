


export default function Testimonials() {

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Startup Founder",
            feedback:
                "FlowServe helped us find reliable developers quickly. The checkout flow is smooth and transparent."
        },
        {
            name: "Arjun Mehta",
            role: "Product Manager",
            feedback:
                "The platform makes comparing services effortless. Huge time saver for teams."
        },
        {
            name: "Emily Chen",
            role: "Freelancer",
            feedback:
                "As a provider, FlowServe gives me consistent visibility and quality clients."
        }
    ];


    return (
        <div className="testimonials-page">
            <h1>What Our Clients Say</h1>
            <div className="carousel">


                <div className="testimonials-grid" >
                    {[...testimonials, ...testimonials].map((t, index) => (
                        <div key={index} className="testimonial-card" >
                            <h4>{t.name}</h4>
                            <span>{t.role}</span>
                            <p>{t.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}