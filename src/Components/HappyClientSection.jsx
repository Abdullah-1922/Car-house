

const HappyClientSection = () => {
    // Sample client testimonials and ratings
    const clientReviews = [
        {
            name: 'John Doe',
            testimonial: 'I love my Honda Civic! It offers an amazing driving experience with top-notch features.',
            rating: 5,
        },
        {
            name: 'Alice Smith',
            testimonial: 'The BMW X5 is the perfect family SUV. It\'s spacious and comfortable for long trips.',
            rating: 4,
        },
        {
            name: 'Emily Johnson',
            testimonial: 'The Supra MK-5 is pure luxury on wheels. I couldn\'t be happier with my purchase.',
            rating: 5,
        },
    ];

    return (
        <div className="container px-5 py-3 mx-auto bg-gradient-to-br from-fuchsia-300 via-violet-300 to-purple-200">
        <section className="happy-client-section">
            <h2 className="text-2xl text-center font-bold my-5">Our Happy Clients</h2>
            <div className="client-reviews  border-[3px] p-3">
                {clientReviews.map((review, index) => (
                    <div key={index} className="p-2 border-y client-review">
                        <p className="testimonial font-semibold">{review.testimonial}</p>
                        <p className="client-name font-bold">{review.name}</p>
                        <div className="rating">
                            {Array.from({ length: review.rating }, (_, i) => (
                                <span key={i} className="star">★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
};

export default HappyClientSection;
