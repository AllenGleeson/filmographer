import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Wedding Photography',
      description: 'Capture your special day with beautiful, timeless photographs that tell your unique love story.',
      icon: '💒'
    },
    {
      id: 2,
      title: 'Portrait Sessions',
      description: 'Professional headshots and portraits for individuals, families, and corporate needs.',
      icon: '📸'
    },
    {
      id: 3,
      title: 'Event Coverage',
      description: 'Document your important events with professional photography and videography services.',
      icon: '🎉'
    },
    {
      id: 4,
      title: 'Commercial Work',
      description: 'High-quality visual content for businesses, products, and marketing materials.',
      icon: '💼'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of photography and videography services to meet your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
