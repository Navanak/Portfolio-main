import { skills } from '@/data/portfolio'
import { Cpu, Database, Cloud, Code2, Wrench, GitBranch } from 'lucide-react'

const Skills = () => {
  const skillIcons = {
    'Programming Languages': Code2,
    'Machine Learning & AI': Cpu,
    'Cloud Platforms': Cloud,
    'APIs & Frameworks': GitBranch,
    'Data Engineering': Database,
    'DevOps & Tools': Wrench
  }

  return (
    <section id="skills" className="py-16 bg-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mb-6">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-700 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {skills.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillCategory, index) => {
                const IconComponent = skillIcons[skillCategory.category as keyof typeof skillIcons] || Code2
                
                return (
                  <div key={index} className="glass-effect rounded-2xl p-8 hover-lift glow-effect">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {skillCategory.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center justify-between py-2 px-4 bg-white/5 rounded-lg border-l-4 border-accent-500 hover:bg-white/10 transition-all duration-300"
                        >
                          <span className="text-white font-medium">{skill}</span>
                          <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Cpu className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/60 text-lg">
                Skills and technologies will be displayed here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills