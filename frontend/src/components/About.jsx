import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Globe } from 'lucide-react';
import { personalInfo, experience } from '../mock/data';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies including React, Node.js, and cloud platforms."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, user-centered designs that enhance digital experiences."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, efficient applications that deliver exceptional user experiences."
    },
    {
      icon: Globe,
      title: "Digital Innovation",
      description: "Staying ahead of tech trends to deliver cutting-edge solutions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "60px" } : { width: 0 }}
              transition={{ duration: 1 }}
              className="h-px bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"
            />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate developer and designer crafting digital experiences
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Avatar Section */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="relative mx-auto lg:mx-0 w-80 h-80 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing Border */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Avatar Image */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-sm"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full blur-sm"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Building Digital Dreams into Reality
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest design trends, 
                  contributing to open-source projects, or experimenting with new technologies 
                  that push the boundaries of what's possible on the web.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: "50+", label: "Projects" },
                  { number: "3+", label: "Years Experience" },
                  { number: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center p-4 rounded-lg bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50"
                  >
                    <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group p-6 rounded-xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
              Professional Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={inView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"
              />
              
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50"
                  />
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="text-cyan-400 text-sm font-mono mb-1">{exp.duration}</div>
                      <h4 className="text-xl font-bold text-white mb-1">{exp.position}</h4>
                      <div className="text-purple-400 font-semibold mb-3">{exp.company}</div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;