import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  Microscope,
  Leaf,
  Truck,
  Award,
  Clock,
  CheckCircle2,
  Globe
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing at every stage ensures the highest quality standards for all products.',
    },
    {
      icon: Microscope,
      title: 'Research & Development',
      description: 'Cutting-edge R&D facilities dedicated to innovation and new drug development.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Environmentally responsible manufacturing processes and green chemistry initiatives.',
    },
    {
      icon: Truck,
      title: 'Global Distribution',
      description: 'Efficient supply chain management ensuring timely delivery worldwide.',
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'ISO 9001, WHO GMP, and FDA certified manufacturing facilities.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support for all stakeholders.',
    },
    {
      icon: CheckCircle2,
      title: 'Regulatory Compliance',
      description: 'Full compliance with international pharmaceutical regulations and standards.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving healthcare providers and patients across 30+ countries.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            State-of-the-art facilities and processes that set industry standards for
            pharmaceutical manufacturing excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Committed to Healthcare Excellence
          </h3>
          <p className="text-xl mb-8 text-emerald-50 max-w-3xl mx-auto">
            Our world-class manufacturing facilities and dedicated team ensure that every
            product meets the highest standards of quality, safety, and efficacy.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-emerald-100">Quality Tested</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-emerald-100">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
