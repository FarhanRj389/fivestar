import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users,
  FileText,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Home,
  Wrench,
  
  Search,
  Download,
  Plus,
  Minus,
  Key,
  Camera,
  ClipboardList,

  Star,
  ArrowRight,
 
  UserCheck,
  Bed,
  Check,
 
} from 'lucide-react';

const Tenants: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'application' | 'inspection' | 'maintenance' | 'moving'>('application');

 const benefits = [
    {
      title: "Looking for a 2-Bedroom to Rent?",
      description: "Click here to explore available 2-bedroom properties!",
      icon: Check,
      btn: "2-Bedroom",
      link: "https://www.renti.co/listing/2-beddy-street-auckland-auckland-2019"
    },
    {
      title: "Need a 3-Bedroom Rental?",
      description: "Browse our current listings by clicking here.",
      icon: Check,
       btn: "3-Bedroom",
       link: "https://www.renti.co/listing/3-beddy-street-auckland-auckland-2019"
    },
  
  ];

  const tenantServices = [
    {
      icon: Search,
      title: "Property Search Assistance",
      description: "Our team helps you find the perfect rental property that matches your needs and budget."
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "We guide you through the application process and help ensure all documentation is complete."
    },
    {
      icon: Key,
      title: "Move-in Coordination",
      description: "Smooth move-in process with detailed property inspections and key handover."
    },
    {
      icon: Wrench,
      title: "Maintenance Support",
      description: "24/7 maintenance reporting system with prompt response to all repair requests."
    },
    {
      icon: Shield,
      title: "Tenancy Protection",
      description: "We ensure your rights are protected and all tenancy laws are properly followed."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Dedicated support team available throughout your tenancy for any questions or concerns."
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Find Your Property",
      description: "Browse our available properties online or contact us for personalized assistance.",
      icon: Search
    },
    {
      step: "2",
      title: "Prepare Documents",
      description: "Gather required documents including ID, proof of income, and references.",
      icon: FileText
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Complete our online application form or visit our office to apply in person.",
      icon: UserCheck
    },
    {
      step: "4",
      title: "Application Review",
      description: "We'll review your application and contact your references within 24-48 hours.",
      icon: ClipboardList
    },
    {
      step: "5",
      title: "Approval & Move-in",
      description: "Once approved, pay bond and first week's rent, then schedule your move-in.",
      icon: Key
    }
  ];

  const inspectionGuide = [
    {
      category: "Before Moving In",
      items: [
        "Take photos of any existing damage or wear",
        "Check all appliances are working properly",
        "Test all light switches and power outlets",
        "Ensure all windows and doors open and close properly",
        "Check water pressure in all taps and showers",
        "Document the condition of walls, floors, and ceilings"
      ]
    },
    {
      category: "During Your Tenancy",
      items: [
        "Keep the property clean and tidy at all times",
        "Report any maintenance issues immediately",
        "Allow access for routine inspections (48 hours notice)",
        "Maintain gardens and outdoor areas as specified",
        "Ensure proper ventilation to prevent mold",
        "Follow any specific property care instructions"
      ]
    },
    {
      category: "Before Moving Out",
      items: [
        "Give proper notice as per your tenancy agreement",
        "Clean the property thoroughly (professional cleaning may be required)",
        "Repair any damage caused during your tenancy",
        "Remove all personal belongings and rubbish",
        "Return all keys, remotes, and access cards",
        "Arrange final inspection with property manager"
      ]
    }
  ];

  const maintenanceTypes = [
    {
      type: "Emergency",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      examples: ["No hot water", "Electrical faults", "Gas leaks", "Burst pipes", "Broken locks"],
      response: "Immediate response - Call our 24/7 emergency line"
    },
    {
      type: "Urgent",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      examples: ["Heating/cooling issues", "Blocked drains", "Leaking taps", "Broken windows"],
      response: "Within 24 hours during business days"
    },
    {
      type: "Routine",
      icon: Wrench,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      examples: ["General repairs", "Painting touch-ups", "Garden maintenance", "Appliance servicing"],
      response: "Within 5-7 business days"
    }
  ];

  const tenantFAQs = [
    {
      question: "What documents do I need to apply for a rental property?",
      answer: "You'll need photo identification (driver's license or passport), proof of income (recent payslips or employment letter), bank statements from the last 3 months, and contact details for previous landlords or personal references."
    },
    {
      question: "How much do I need to pay upfront?",
      answer: "Typically, you'll need to pay a bond (usually 3-4 weeks rent) plus the first week's rent in advance. Some properties may also require the last week's rent upfront."
    },
    {
      question: "How long does the application process take?",
      answer: "We aim to process applications within 24-48 hours. This includes reference checks and credit assessments. We'll keep you informed throughout the process."
    },
    {
      question: "Can I have pets in the rental property?",
      answer: "Pet policies vary by property. Some landlords allow pets with additional bond, while others don't permit pets at all. Check the property listing or ask our team about pet-friendly options."
    },
    {
      question: "What happens if something breaks in the property?",
      answer: "Report any maintenance issues to us immediately. For emergencies, call our 24/7 line. For non-urgent repairs, you can submit a request online or call during business hours."
    },
    {
      question: "How much notice do I need to give when moving out?",
      answer: "For periodic tenancies, you need to give 21 days notice. For fixed-term tenancies, you generally need to stay until the end of the term unless there are special circumstances."
    },
    {
      question: "When will I get my bond back?",
      answer: "Your bond will be returned within 10 working days after the final inspection, provided there's no damage beyond normal wear and tear and all rent is paid."
    },
    {
      question: "Can the landlord increase my rent?",
      answer: "Rent can only be increased once every 12 months for periodic tenancies, with 60 days written notice. The increase must be market-related and not excessive."
    }
  ];

  const tenantRights = [
    "Right to quiet enjoyment of the property",
    "Right to have repairs completed in reasonable time",
    "Right to 24 hours notice for inspections (except emergencies)",
    "Right to privacy and peaceful enjoyment",
    "Protection from unlawful rent increases",
    "Right to challenge excessive rent increases",
    "Right to have bond lodged with Tenancy Services",
    "Right to receive proper notice for tenancy termination"
  ];

  const movingTips = [
    {
      title: "2 Weeks Before",
      tasks: [
        "Confirm moving date with property manager",
        "Book removalist or truck rental",
        "Start using up frozen and perishable food",
        "Begin packing non-essential items"
      ]
    },
    {
      title: "1 Week Before",
      tasks: [
        "Arrange utility disconnections/connections",
        "Update your address with banks, employers, etc.",
        "Confirm moving day logistics",
        "Pack everything except essentials"
      ]
    },
    {
      title: "Moving Day",
      tasks: [
        "Do final meter readings",
        "Complete move-out inspection",
        "Hand over all keys and remotes",
        "Take photos of property condition"
      ]
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
          src="/banner_video_1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute  z-10 inset-0 bg-black/20">
        </div>

         
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tenant Resources & Support
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about renting with Five Star Rentals. From application to move-out, we're here to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-primary-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
            >
              <Search className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Find Properties</h3>
              <p className="text-secondary-600 text-sm mb-4">Browse available rentals</p>
              <Link to="/properties" className="text-primary-600 font-medium hover:text-primary-700">
                View Properties →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-accent-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Emergency Line</h3>
              <p className="text-secondary-600 text-sm mb-4">24/7 urgent repairs</p>
              <a href="tel:+6420457496" className="text-accent-600 font-medium hover:text-accent-700">
                +64 20 457 4963
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
            >
              <Wrench className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Report Maintenance</h3>
              <p className="text-secondary-600 text-sm mb-4">Submit repair requests</p>
              <Link to="/contact" className="text-secondary-600 font-medium hover:text-secondary-700">
                Report Issue →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Download Forms</h3>
              <p className="text-secondary-600 text-sm mb-4">Tenancy documents</p>
              <button className="text-green-600 font-medium hover:text-green-700">
                Get Forms →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              How We Support Our Tenants
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From finding your perfect home to ongoing support throughout your tenancy, we're committed to providing exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenantServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
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
              Looking to Rent?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Find Your Next Home with Confidence
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
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {benefit.description}
                    </p>
                    <button  className='bg-gradient-to-r from-primary-500 to-accent-500 py-2 text-white px-10 mt-2 rounded-full'>
                      <Link to={benefit.link}>
                {benefit.btn}
                      </Link>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Application Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our streamlined application process makes it easy to secure your new home.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-secondary-600" />
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

      {/* Tabbed Content Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Tenant Guides & Information
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive guides to help you throughout your tenancy.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-sm">
              {[
                { id: 'application', label: 'Application Tips', icon: FileText },
                { id: 'inspection', label: 'Inspection Guide', icon: ClipboardList },
                { id: 'maintenance', label: 'Maintenance', icon: Wrench },
                { id: 'moving', label: 'Moving Guide', icon: Home }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'text-secondary-600 hover:text-secondary-900'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {activeTab === 'application' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Application Tips & Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">Required Documents</h4>
                    <ul className="space-y-3">
                      {[
                        "Photo identification (driver's license or passport)",
                        "Proof of income (recent payslips or employment letter)",
                        "Bank statements (last 3 months)",
                        "Previous landlord references",
                        "Personal references (2-3 contacts)",
                        "Completed application form"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">Application Tips</h4>
                    <ul className="space-y-3">
                      {[
                        "Apply as soon as possible for popular properties",
                        "Ensure all information is accurate and complete",
                        "Provide clear, recent photos of documents",
                        "Include a brief cover letter introducing yourself",
                        "Be honest about your rental history",
                        "Have references ready to respond quickly"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'inspection' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Property Inspection Guide</h3>
                <div className="space-y-8">
                  {inspectionGuide.map((section, index) => (
                    <div key={section.category}>
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                        <Camera className="w-5 h-5 text-primary-600 mr-2" />
                        {section.category}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-secondary-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'maintenance' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Maintenance Request Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {maintenanceTypes.map((type, index) => (
                    <div key={type.type} className={`${type.bgColor} p-6 rounded-2xl`}>
                      <div className="flex items-center mb-4">
                        <type.icon className={`w-8 h-8 ${type.color} mr-3`} />
                        <h4 className={`text-lg font-semibold ${type.color}`}>{type.type}</h4>
                      </div>
                      <p className="text-secondary-600 text-sm mb-4">{type.response}</p>
                      <div>
                        <h5 className="font-medium text-secondary-900 mb-2">Examples:</h5>
                        <ul className="space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="text-secondary-600 text-sm">• {example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-secondary-900 mb-4">How to Report Maintenance Issues</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-secondary-900 mb-3">Emergency (24/7)</h5>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-red-600" />
                          <span className="text-secondary-600">Call: +64 20 457 4963</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-secondary-900 mb-3">Non-Emergency</h5>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span className="text-secondary-600">Email: maintenance@fivestarrentals.co.nz</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span className="text-secondary-600">Office: +64 20 457 4963</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'moving' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Moving In & Out Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {movingTips.map((period, index) => (
                    <div key={period.title} className="bg-secondary-50 p-6 rounded-2xl">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4">{period.title}</h4>
                      <ul className="space-y-3">
                        {period.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-secondary-600 text-sm">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Tenant Rights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Know Your Tenant Rights
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                As a tenant in New Zealand, you have important rights that are protected by law. We ensure these rights are respected throughout your tenancy.
              </p>
              <div className="space-y-4">
                {tenantRights.slice(0, 4).map((right, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600">{right}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-6"
              >
                <span>Get Support</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-secondary-50 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Additional Rights Include:</h3>
              <div className="space-y-4">
                {tenantRights.slice(4).map((right, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600">{right}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-secondary-600">
                  <strong>Need Help?</strong> If you feel your rights are not being respected, contact us immediately or reach out to Tenancy Services for independent advice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600">
              Get answers to the most common questions from our tenants.
            </p>
          </motion.div>

          <div className="space-y-4">
            {tenantFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors"
                >
                  <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-600 flex-shrink-0" />
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
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-secondary-200 mb-8 max-w-3xl mx-auto">
              Our experienced team is here to help you with any questions about renting, applications, or tenancy issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+6420457496"
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
              
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary-900 transition-all duration-200 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Tenants;