import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Shield, 
  Clock, 
 
  CheckCircle,
  TrendingUp,
  FileText,
  Wrench,
  Search,
  Calculator,
  Phone,
  ArrowRight,
  Star,
  Award,

} from 'lucide-react';

const Landlords: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: "Tenant Screening",
      description: "Comprehensive background checks, credit assessments, and reference verification to find quality tenants who will care for your property."
    },
    {
      icon: DollarSign,
      title: "Rent Collection",
      description: "Efficient rent collection with direct deposit, automated reminders, and prompt follow-up on late payments to maximize your cash flow."
    },
    {
      icon: Wrench,
      title: "Property Maintenance",
      description: "Coordinated maintenance with our network of trusted contractors, ensuring quality work at competitive rates with full transparency."
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      description: "Stay compliant with all tenancy laws and regulations. We handle all legal requirements so you don't have to worry about compliance issues."
    },
    {
      icon: Calculator,
      title: "Financial Reporting",
      description: "Detailed monthly financial reports with income, expenses, and property performance analytics to help you make informed decisions."
    },
    {
      icon: Shield,
      title: "Property Inspections",
      description: "Regular property inspections with detailed photo reports to monitor your property's condition and identify issues early."
    }
  ];

  const benefits = [
    {
      title: "Maximize Your Rental Income",
      description: "Our market expertise ensures your property is priced competitively to attract quality tenants while maximizing your returns.",
      icon: TrendingUp
    },
    {
      title: "Reduce Vacancy Periods",
      description: "Professional marketing and tenant screening processes minimize vacancy periods and ensure consistent rental income.",
      icon: Clock
    },
    {
      title: "Peace of Mind",
      description: "24/7 emergency support and comprehensive property management means you can relax knowing your investment is in good hands.",
      icon: Shield
    },
    {
      title: "Professional Service",
      description: "Our experienced team handles all aspects of property management with professionalism and attention to detail.",
      icon: Award
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Property Appraisal",
      description: "We provide a comprehensive market analysis and rental appraisal for your property at no cost."
    },
    {
      step: "2",
      title: "Marketing & Advertising",
      description: "Professional photography and marketing across multiple platforms to attract quality tenants quickly."
    },
    {
      step: "3",
      title: "Tenant Screening",
      description: "Thorough screening process including credit checks, employment verification, and reference checks."
    },
    {
      step: "4",
      title: "Lease Management",
      description: "Handle all lease agreements, move-in inspections, and ongoing tenancy management."
    },
    {
      step: "5",
      title: "Ongoing Management",
      description: "Regular inspections, maintenance coordination, and detailed reporting to keep you informed."
    }
  ];

  const testimonials = [
    {
      name: "John Mitchell",
      location: "Ponsonby",
      text: "Five Star Rentals has been managing my investment properties for 3 years. Their professionalism and attention to detail is outstanding. I've never had any issues with rent collection or property maintenance.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      location: "Remuera",
      text: "I was hesitant to use a property management company, but Five Star Rentals exceeded my expectations. They found excellent tenants quickly and handle everything professionally.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Mount Eden",
      text: "The monthly reports are detailed and helpful. I always know exactly how my properties are performing. The team is responsive and handles maintenance issues promptly.",
      rating: 5
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='pt-24 md:pt-28'>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
        
      <div className='absolute z-0 w-ful top-0 right-0 left-0'>
        <video
          className=" w-full h-[300px] lg:h-[630px] object-cover"
          src="/banner_1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute  z-10 inset-0 bg-black/20">
        </div>

         
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Property Management for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400">
                  Smart Landlords
                </span>
              </h1>
              <p className="text-xl text-secondary-200 mb-8 leading-relaxed">
                Maximize your rental returns while minimizing your stress. Our comprehensive property management services are designed to protect and grow your investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Appraisal</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+6420457496"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary-900 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400" />
                    <span>98% Client Satisfaction Rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400" />
                    <span>Average 7 Days to Find Tenants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400" />
                    <span>24/7 Emergency Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400" />
                    <span>Fully Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Comprehensive Property Management Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From tenant screening to maintenance coordination, we handle every aspect of property management so you don't have to.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Benefits of Professional Management
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Discover how professional property management can transform your investment experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Simple Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Getting started with Five Star Rentals is easy. Here's how we work with you to manage your property.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              What Our Landlords Say
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied landlords have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-600 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Maximize Your Investment?
            </h2>
            <p className="text-xl text-secondary-200 mb-8 max-w-3xl mx-auto">
              Get your free property appraisal today and discover how Five Star Rentals can help you achieve better returns with less stress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Get Free Appraisal</span>
              </Link>
              
              <a
                href="tel:+6420457496"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary-900 transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +64 20 457 4963</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Landlords;