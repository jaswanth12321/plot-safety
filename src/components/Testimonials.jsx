const testimonials = [
  {
    content: "Working with SoftHouse transformed our business. Their expertise in software development helped us streamline operations and improve customer experience.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=60"
  },
  {
    content: "The team at SoftHouse delivered our project on time and exceeded our expectations. Their communication and technical skills are outstanding.",
    author: "Michael Chen",
    role: "CTO",
    company: "MobiConnect",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=60"
  },
  {
    content: "We've been working with SoftHouse for over 3 years now, and they've consistently delivered high-quality solutions for our complex requirements.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    company: "CloudSys",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=60"
  }
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f8f5ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-5 mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f1ebff] text-purple-600 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#4b5563] max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#f3f4f6]"
            >
              <div className="flex gap-1.5 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-[1.0625rem] leading-[1.75] text-[#374151] mb-8">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-[1.125rem] font-semibold text-[#111827]">
                    {testimonial.author}
                  </h4>
                  <p className="text-[0.9375rem]">
                    <span className="text-[#4b5563]">{testimonial.role}</span>
                    <span className="text-[#6b7280]">, {testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 