import { education } from '@/data/portfolio'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="py-16 bg-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {education.length > 0 ? (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="glass-effect rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-white/80 mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap items-center text-white/60 text-sm mb-4 gap-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.graduationDate}
                        </div>
                        {edu.gpa && (
                          <div className="font-medium text-white/80">
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>
                      
                      {edu.relevantCourses && (
                        <div>
                          <h4 className="font-medium text-white mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCourses.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full border border-primary-500/30"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <GraduationCap className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/60 text-lg">
                Education details will be displayed here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Education