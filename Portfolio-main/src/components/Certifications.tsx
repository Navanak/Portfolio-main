import { certifications } from '@/data/portfolio'
import { Award, Calendar } from 'lucide-react'

const Certifications = () => {
  if (certifications.length === 0) {
    return null
  }

  return (
    <section id="certifications" className="py-16 bg-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-effect rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-white/80 mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center text-white/60 text-sm mb-2">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                  
                  {cert.credentialId && (
                    <p className="text-sm text-white/50">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications