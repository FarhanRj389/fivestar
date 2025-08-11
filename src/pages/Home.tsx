import React, { useState,  } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  CheckCircle,
  ArrowRight,
  Home as HomeIcon,
  Phone,
  Mail,
  ChevronDown,
  Plus,
  Minus,
  MapPin,
  Navigation,
  Building
} from 'lucide-react';

const Home: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [0, 0]);
  
  
  const features = [
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete peace of mind with comprehensive insurance coverage and full licensing compliance."
    },
    {
      icon: TrendingUp,
      title: "Maximize Your Returns",
      description: "Strategic pricing and market analysis to ensure optimal rental yields for your investment."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated property managers with years of Auckland market experience."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency support for both landlords and tenants."
    }
  ];

  const stats = [
    { number: "200+", label: "Properties Managed" },
    { number: "98%", label: "Tenant Satisfaction" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const reasons = [
    {
      title: "Professional Tenant Screening",
      description: "Comprehensive background checks, credit assessments, and reference verification to find quality tenants."
    },
    {
      title: "Competitive Management Fees",
      description: "Transparent pricing with no hidden costs. Our fees are competitive and provide exceptional value."
    },
    {
      title: "Regular Property Inspections",
      description: "Scheduled inspections with detailed reports to maintain your property's condition and value."
    },
    {
      title: "Fast Rent Collection",
      description: "Efficient rent collection system with direct deposit and prompt follow-up on late payments."
    },
    {
      title: "Maintenance Coordination",
      description: "Network of trusted contractors providing quality maintenance at competitive rates."
    },
    {
      title: "Legal Compliance",
      description: "Stay compliant with all tenancy laws and regulations with our expert legal knowledge."
    }
  ];

  const landlordFAQs = [
    {
      question: "What are your management fees?",
      answer: "Our management fees are competitive and transparent, typically ranging from 7-10% depending on the services required. We provide a detailed breakdown with no hidden costs."
    },
    {
      question: "How do you screen tenants?",
      answer: "We conduct comprehensive tenant screening including credit checks, employment verification, previous landlord references, and identity verification to ensure quality tenants."
    },
    {
      question: "How often do you inspect my property?",
      answer: "We conduct routine inspections every 3 months with detailed photo reports sent to you within 24 hours. Additional inspections can be arranged as needed."
    },
    {
      question: "What happens if there's maintenance required?",
      answer: "We have a network of trusted contractors and handle all maintenance coordination. For expenses under $500, we proceed immediately and notify you. Larger expenses require your approval first."
    }
  ];

  const tenantFAQs = [
    {
      question: "How do I apply for a property?",
      answer: "You can apply online through our website or visit our office. You'll need to provide identification, proof of income, and references. Our team will guide you through the process."
    },
    {
      question: "What documents do I need to provide?",
      answer: "You'll need photo ID, proof of income (payslips or employment letter), bank statements, and contact details for previous landlords or references."
    },
    {
      question: "How quickly can I move in?",
      answer: "Once your application is approved and you've paid the bond and first week's rent, you can typically move in within 1-2 business days."
    },
    {
      question: "Who do I contact for maintenance issues?",
      answer: "Contact our office during business hours or use our 24/7 emergency line for urgent issues. We'll coordinate repairs promptly with our trusted contractors."
    }
  ];

  return (
    <>
      <SEO 
        title="FiverStarRental | Premium Property Management in Auckland"
        description="Five Star Rentals - We don't just manage properties, we craft future landlords. Premium property management services in Auckland for landlords and tenants. 200+ properties managed, 98% satisfaction rate."
        keywords="property management Auckland, rental property management, landlord services Auckland, tenant services, property management company, Auckland property management, rental management, property investment Auckland"
        image="/logo.png"
      />
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Fixed Video Background with Parallax */}
      <motion.div 
        className="fixed inset-0 w-full h-full z-0"
        style={{ y: videoY }}
      >
        <video
          className="w-full h-full object-cover"
          src="/video_3.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/40 via-secondary-800/30 to-secondary-900/50"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>
        
      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[100vh] flex items-center justify-center overflow-hidden z-10">
        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We don't just manage properties,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F6D03F] to-accent-500">
                we craft future landlords
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-200 mb-8 max-w-3xl mx-auto leading-relaxed">
             </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#F6D03F] to-accent-500 text-black lg:px-8 lg:py-4 px-4 py-2 rounded-full font-semibold lg:text-lg text-base hover:from-[#F6D03F] hover:to-[#F6D03F] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Get Free Appraisal</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/landlords"
                className="border-2 border-white text-white lg:px-8 lg:py-4 px-4 py-2 rounded-full font-semibold lg:text-lg text-base hover:bg-white hover:text-secondary-900 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 " />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white/30 pt-32 md:pt-40 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
        <div className="text-4xl md:text-5xl font-bold text-[#F6D03F] mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-20 bg-white/30 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden  shadow-2xl">
                <img src="/about_section.jpeg" alt="About Section" className='w-full h-[300px] lg:h-[630px] rounded-sm object-cover'/>
              {/* <video
          className=" w-full h-[300px] lg:h-[630px] object-cover"
          src="/banner_video_3.mp4"
          autoPlay
          loop
          muted
          playsInline
        /> */}
                {/* <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Five Star Rentals Team"
                  className="w-full h-96 object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F6D03F] mb-1">10+</div>
                  <div className="text-sm text-secondary-600">Years of Excellence</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold  text-white mb-6">
                  About Five Star Rentals
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F6D03F] to-accent-500 mb-6"></div>
              </div>
              
              <div className="space-y-4 text-base text-white leading-relaxed">
                <p>
                  Founded in 2020, Five Star Rentals was created to deliver a no-nonsense, proactive approach to property management in Auckland one that truly supports both landlords and their tenants.
 </p>
                <p>
                 With over 10 years of hands-on experience in the Auckland property market, I've seen firsthand what works and what doesn't. In my previous role, I solely managed a portfolio of over 180 properties before stepping into a leadership position, overseeing a team of four property managers responsible for more than 380 properties. This experience shaped my belief that property management should be personal, transparent, and results-driven.
</p>
                <p>
               Today, Five Star Rentals is proudly managing just under 100 quality properties across Auckland. We're continuing to grow organically working with like-minded, caring landlords who value honest service and long-term results. Our portfolio growth is now approaching 100 properties, a reflection of our reputation and the trust we've built in the market </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Building className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary-900">200+</div>
                  <div className="text-sm text-secondary-600">Properties Managed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary-900">98%</div>
                  <div className="text-sm text-secondary-600">Satisfaction Rate</div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F6D03F] to-accent-500 text-black px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Point of Difference Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#F6D03F] to-accent-500 z-10">
        <div className="w-ful mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <video
                  className="w-full h-[250px] md:h-[350px] lg:h-[500px] object-cover"
                  src="/video_3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                  A Point of Difference That Sets Us Apart
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F6D03F] to-accent-500 mb-6"></div>
              </div>
              <div className="space-y-4 text-base text-secondary-700 leading-relaxed">
                <p className="text-lg md:text-xl">
                  We're not just here for landlords, we're here for tenants too. Unlike many agencies, we actively assist tenants in finding quality rental properties, which means we always have a ready pool of prospective tenants searching year-round.
                </p>
                <p className="text-lg md:text-xl">
                  From local movers to international arrivals, tenants regularly engage us often through partnerships with offshore property managers and recruitment agencies. This unique approach ensures faster occupancy, less vacancy, and better outcomes for everyone involved.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-500 mb-2">Faster</div>
                  <div className="text-sm text-secondary-600">Occupancy</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-500 mb-2">Less</div>
                  <div className="text-sm text-secondary-600">Vacancy</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-xl">
                  <div className="text-2xl font-bold text-secondary-600 mb-2">Better</div>
                  <div className="text-sm text-secondary-600">Outcomes</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white/30 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Five Star Rentals?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We combine years of experience with innovative technology to deliver exceptional property management services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#F6D03F] to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="relative py-20 bg-secondary-50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              More Reasons to Work With Us
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Discover what sets us apart in Auckland's competitive property management market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20  bg-secondary-50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Get answers to common questions from landlords and tenants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Landlord FAQs */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 flex items-center">
                <HomeIcon className="w-6 h-6 text-yellow-500 mr-3" />
                For Landlords
              </h3>
              <div className="space-y-4">
                {landlordFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-secondary-50 rounded-xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white transition-colors"
                    >
                      <span className="font-semibold text-secondary-900">{faq.question}</span>
                      {openFAQ === index ? (
                        <Minus className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-yellow-500" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tenant FAQs */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 flex items-center">
                <Users className="w-6 h-6 text-yellow-500 mr-3" />
                For Tenants
              </h3>
              <div className="space-y-4">
                {tenantFAQs.map((faq, index) => (
                  <motion.div
                    key={index + 10}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-secondary-50 rounded-xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === (index + 10) ? null : (index + 10))}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white transition-colors"
                    >
                      <span className="font-semibold text-secondary-900">{faq.question}</span>
                      {openFAQ === (index + 10) ? (
                        <Minus className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-yellow-500" />
                      )}
                    </button>
                    {openFAQ === (index + 10) && (
                      <div className="px-6 pb-4">
                        <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Map */}
      <section className="relative py-20 bg-gradient-to-r from-secondary-900 to-secondary-800 z-10">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-secondary-200 mb-8 leading-relaxed">
                Join hundreds of satisfied landlords who trust Five Star Rentals with their investment properties. Visit our Auckland CBD office or contact us today.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-[#F6D03F]" />
                  <div>
                    <div className="font-semibold">South Auckland</div>
                    {/* <div className="text-secondary-300">Auckland CBD, 1010</div> */}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-[#F6D03F]" />
                  <div>
                    <div className="font-semibold">+64 20 457 4963</div>
                    <div className="text-secondary-300">24/7 Emergency Support</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-[#F6D03F]" />
                  <div>
                    <div className="font-semibold">admin@fivestarrentals.co.nz</div>
                    <div className="text-secondary-300">General Inquiries</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#F6D03F] to-accent-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-[#F6D03F] hover:to-yellow-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Get Your Free Appraisal</span>
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

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Visit Our Office
                </h3>
                
                {/* Map placeholder with styling */}
                <div className="relative bg-secondary-100 rounded-xl overflow-hidden h-64 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg"
                      >
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12747.071910342427!2d174.86308441864674!3d-36.991471164384095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4dc19e820805%3A0x1680883dfcbb72e8!2sSouth%20Auckland%2C%20Manukau%20City%20Centre%2C%20Auckland%202104%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1754293950216!5m2!1sen!2s"
                          width="540"
                          height="260"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google Map"
                        ></iframe>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Interactive map overlay */}
                  {/* <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="bg-white/90 px-4 py-2 rounded-full flex items-center space-x-2">
                      <Navigation className="w-5 h-5 text-primary-600" />
                      <span className="text-secondary-900 font-medium">Get Directions</span>
                    </div>
                  </div> */}
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <Clock className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                    <div className="text-white font-medium text-sm">Mon-Fri</div>
                    <div className="text-secondary-300 text-xs">8:30 AM - 5:30 PM</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <Clock className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                    <div className="text-white font-medium text-sm">Saturday</div>
                    <div className="text-secondary-300 text-xs">9:00 AM - 2:00 PM</div>
                  </div>
                </div>

                <a  
                  href="https://maps.google.com/?q=123+Queen+Street+Auckland+CBD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-6 bg-white text-secondary-900 py-3 px-6 rounded-lg font-semibold text-center hover:bg-secondary-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
    </>
  );
};

export default Home;