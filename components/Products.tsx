import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pill, Syringe, Droplet, Heart, Brain, Activity } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Pill,
      title: 'Tablets & Capsules',
      description: 'Comprehensive range of oral solid dosage forms manufactured under strict quality controls.',
      categories: ['Antibiotics', 'Analgesics', 'Vitamins'],
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Syringe,
      title: 'Injectable Solutions',
      description: 'Sterile injectable formulations produced in state-of-the-art cleanroom facilities.',
      categories: ['IV Solutions', 'Vaccines', 'Biologics'],
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Droplet,
      title: 'Liquid Formulations',
      description: 'Syrups, suspensions, and solutions for pediatric and adult use.',
      categories: ['Syrups', 'Drops', 'Suspensions'],
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      icon: Heart,
      title: 'Cardiovascular',
      description: 'Medications for heart health and circulatory system management.',
      categories: ['ACE Inhibitors', 'Beta Blockers', 'Statins'],
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced formulations for neurological conditions and mental health.',
      categories: ['Anticonvulsants', 'Antidepressants', 'Anxiolytics'],
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Activity,
      title: 'Oncology',
      description: 'Specialized cancer treatment medications and supportive care products.',
      categories: ['Chemotherapy', 'Supportive Care', 'Targeted Therapy'],
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Product Range</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A diverse portfolio of pharmaceutical products designed to meet the healthcare
            needs of patients worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-2 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${product.color} flex items-center justify-center mb-4`}>
                  <product.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map((category, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            All products manufactured under WHO GMP standards and FDA approved facilities
          </p>
        </div>
      </div>
    </section>
  );
}
