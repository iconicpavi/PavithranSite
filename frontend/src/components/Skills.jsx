import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Palette, Cloud, Server, Zap } from 'lucide-react';
import { skills } from '../mock/data';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categoryIcons = {
    Frontend: Code,
    Backend: Server,
    Database: Database,
    Design: Palette,
    Cloud: Cloud,
    DevOps: Zap
  };

  const categoryColors = {
    Frontend: 'from-cyan-500 to-blue-500',
    Backend: 'from-purple-500 to-pink-500',
    Database: 'from-green-500 to-emerald-500',
    Design: 'from-orange-500 to-red-500',
    Cloud: 'from-yellow-500 to-orange-500',
    DevOps: 'from-indigo-500 to-purple-500'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
          className="absolute top-32 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.4, 1, 1.4],
            rotate: [360, 270, 180, 90, 0]
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
          className="max-w-6xl mx-auto"
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
              Tech Arsenal
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mastering cutting-edge technologies to build tomorrow's digital experiences
            </p>
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
              const IconComponent = categoryIcons[category] || Code;
              const colorGradient = categoryColors[category];

              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Category Card */}
                  <motion.div
                    className="p-6 rounded-xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm"
                    whileHover={{ y: -5 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${colorGradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">{category}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {categorySkills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className="group/skill"
                        >
                          {/* Skill Name and Level */}
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 font-medium group-hover/skill:text-cyan-400 transition-colors duration-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorGradient} rounded-full`}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                                ease: "easeOut"
                              }}
                            />
                            
                            {/* Glow Effect */}
                            <motion.div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorGradient} rounded-full blur-sm opacity-50`}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated Border */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colorGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{ 
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        padding: '1px'
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tech Stack Visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Currently Exploring
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                'Next.js 14', 'TypeScript', 'GraphQL', 'Prisma', 
                'Docker', 'Kubernetes', 'Three.js', 'WebGL',
                'AI/ML Integration', 'Blockchain', 'WebRTC', 'PWAs'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-600/50 rounded-full hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-sm font-medium">
                    {tech}
                  </span>
                  
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;