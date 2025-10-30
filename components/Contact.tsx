"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about our products or services? We're here to help.
            Reach out to our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <Card className="border-2 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="abc"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="abc@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 999999999"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 hover:border-emerald-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Our Location</h4>
                    <p className="text-gray-600">
                      123 Pharma Boulevard<br />
                      Medical District, HC 45678<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">
                      Main: +91 9999999999<br />
                      Sales: +91..........<br />
                      Support: +91 .........
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">
                      General: info@lifebiotech.com<br />
                      Sales: sales@lifebiotech.com<br />
                      Support: support@lifebiotech.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-emerald-600 text-white">
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-2">Business Hours</h4>
                <p className="text-emerald-50">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
