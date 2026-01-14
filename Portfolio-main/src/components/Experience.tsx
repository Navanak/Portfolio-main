import { experience } from '@/data/portfolio'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experience.length > 0 ? (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="glass-effect rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-white/80 mb-2">{exp.company}</p>
                      
                      <div className="flex flex-wrap items-center text-white/60 text-sm mb-4 gap-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.startDate} - {exp.endDate}
                        </div>
                      </div>
                      
                      <ul className="list-disc list-inside text-white/80 mb-4 space-y-1">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex}>{desc}</li>
                        ))}
                      </ul>
                      
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-accent-500/20 text-accent-300 text-sm rounded-full border border-accent-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/60 text-lg">
                Professional experience section - Ready for your first role!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience