import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600">LIFE BIOTECH</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Leading the pharmaceutical industry with innovation, quality, and commitment
            to global healthcare excellence since our inception.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To manufacture and deliver high-quality, affordable pharmaceutical products
                that enhance the health and well-being of people worldwide. We are committed
                to maintaining the highest standards of safety, efficacy, and quality in
                everything we produce.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a globally recognized pharmaceutical company, known for innovation,
                quality, and reliability. We strive to make a meaningful difference in
                healthcare by bringing life-saving medications to those who need them most.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-gray-900 mb-2">500+</h4>
              <p className="text-gray-600 font-medium">Skilled Professionals</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-gray-900 mb-2">50+</h4>
              <p className="text-gray-600 font-medium">Product Portfolio</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-gray-900 mb-2">30+</h4>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
