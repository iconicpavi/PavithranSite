import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Filter, Star } from 'lucide-react';
import { projects } from '../mock/data';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'Web', 'Mobile', 'UI/UX'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "80px" } : { width: 0 }}
              transition={{ duration: 1.2 }}
              className="h-px bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-4"
            />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of digital experiences that blend creativity with cutting-edge technology
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-full border border-gray-700/50">
              <Filter className="w-4 h-4 text-gray-400 ml-2" />
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="group relative"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-yellow-500/50"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="w-3 h-3 fill-current" />
                      </motion.div>
                      Featured
                    </motion.div>
                  )}

                  <motion.div
                    className="relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm"
                    whileHover={{ 
                      y: -15,
                      rotateX: 5,
                      scale: 1.02,
                      borderColor: "rgba(6, 182, 212, 0.5)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.98, y: -5 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      duration: 0.3
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden group/image">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: 1
                        }}
                        transition={{ 
                          duration: 0.6,
                          ease: "easeOut"
                        }}
                      />
                      
                      {/* Animated Overlay with Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ 
                          opacity: 1, 
                          y: 0,
                          background: "linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(6,182,212,0.3) 50%, rgba(147,51,234,0.3) 100%)"
                        }}
                        className="absolute inset-0 flex items-center justify-center gap-6"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative p-4 bg-gray-900/90 backdrop-blur-sm rounded-full text-white border border-gray-600/50 overflow-hidden"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                            borderColor: "rgba(6, 182, 212, 0.8)",
                            boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
                          }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0"
                            whileHover={{ opacity: 1 }}
                          />
                          <Github className="w-5 h-5 relative z-10" />
                        </motion.a>
                        
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative p-4 bg-gray-900/90 backdrop-blur-sm rounded-full text-white border border-gray-600/50 overflow-hidden"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: -360,
                            borderColor: "rgba(147, 51, 234, 0.8)",
                            boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
                          }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0"
                            whileHover={{ opacity: 1 }}
                          />
                          <ExternalLink className="w-5 h-5 relative z-10" />
                        </motion.a>
                      </motion.div>

                      {/* Animated Border Sweep */}
                      <motion.div
                        className="absolute inset-0 border-2 border-transparent"
                        whileHover={{
                          borderImage: "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899) 1",
                        }}
                        style={{
                          background: "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899) border-box",
                          mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                          maskComposite: "xor"
                        }}
                      />

                      {/* Particle Effects on Hover */}
                      {hoveredProject === project.id && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                              style={{
                                left: `${20 + (i * 10)}%`,
                                top: `${20 + (i * 8)}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.category === 'Web' ? 'bg-blue-500/20 text-blue-300' :
                          project.category === 'Mobile' ? 'bg-green-500/20 text-green-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            className="px-2 py-1 text-xs bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded border border-gray-600/50 hover:border-cyan-500/50 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        padding: '2px'
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View All Projects Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full border border-gray-600 overflow-hidden transition-all duration-300 hover:border-cyan-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;