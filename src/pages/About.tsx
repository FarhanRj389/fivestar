import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Star,
  Heart,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings with landlords and tenants."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from tenant screening to property maintenance."
    },
    {
      icon: Heart,
      title: "Care",
      description: "We genuinely care about our clients' success and treat every property as if it were our own."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace technology and innovative solutions to provide better service and results."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Five Star Rentals was established with a vision to revolutionize property management in Auckland."
    },
    {
      year: "2021",
      title: "100 Properties",
      description: "Reached our first major milestone of managing 100 properties across Auckland."
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Received the 'Best Property Management Company' award from Auckland Business Excellence."
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description: "Launched our comprehensive digital platform for landlords and tenants."
    },
    {
      year: "2024",
      title: "500+ Properties",
      description: "Expanded to manage over 500 properties with a 98% client satisfaction rate."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-28" // Increased padding to account for fixed header
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
        <div className='absolute z-0 w-ful top-0 right-0 left-0'>
          <video
            className=" w-full h-[300px] lg:h-[630px] object-cover"
            src="/banner_video_1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute  z-10 inset-0 bg-black/20">
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Five Star Rentals
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 max-w-4xl mx-auto leading-relaxed">
              We're Auckland's premier property management company, dedicated to crafting successful landlords and providing exceptional rental experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-secondary-600 leading-relaxed">
                <p>
                  Founded in 2020, Five Star Rentals was created to deliver a no-nonsense, proactive approach to property management in Auckland one that truly supports both landlords and their tenants. </p>
                <p>
                  With over 10 years of hands-on experience in the Auckland property market, I've seen firsthand what works and what doesn't. In my previous role, I solely managed a portfolio of over 180 properties before stepping into a leadership position, overseeing a team of four property managers responsible for more than 380 properties. This experience shaped my belief that property management should be personal, transparent, and results-driven. </p>
                <p>
                  Today, Five Star Rentals is proudly managing just under 100 quality properties across Auckland. We're continuing to grow organically working with like-minded, caring landlords who value honest service and long-term results. Our portfolio growth is now approaching 100 properties, a reflection of our reputation and the trust we've built in the market      </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-accent-500 rounded-2xl p-8 text-black">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-black">Properties Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-black">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-black">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-black">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Key milestones that have shaped Five Star Rentals into Auckland's leading property management company.
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 to-accent-500 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-yellow-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-accent-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Meet Our Team
          </h2>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 text-base text-secondary-600 leading-relaxed">
                <p>
                  Jasdeep Singh (Jas) is a dedicated real estate professional with extensive experience in property management across Auckland. Known for his transparent, no-nonsense, and proactive approach, he helps landlords and tenants navigate the rental market with confidence and clarity.</p>
                <p>
                  Previously Head of Property Management at one of Auckland's largest real estate agencies, Jasdeep brings a wealth of knowledge and hands-on expertise to every situation. His in-depth understanding of tenancy law, operations, and local market trends allows him to deliver practical, people-first solutions that get results.
                </p>
                <p>
                  With a strong focus on communication, detail, and service, Jasdeep is committed to supporting both landlords and tenants through every step of the property journey.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-60 h-60 bg-gradient-to-r from-yellow-500 to-accent-500 overflow-hidden rounded-full mx-auto mb-6 flex items-center justify-center">
                <img src='/meets.png' className="w-60 h-60 rounded-full overflow-hidden text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Jasdeep Singh (Jas)
              </h3>
              <div className="text-yellow-500 font-medium mb-4">
                Head of Property Management
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;