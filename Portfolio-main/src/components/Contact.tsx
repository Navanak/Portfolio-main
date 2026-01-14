import { personalInfo } from '@/data/portfolio'
import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-700 mx-auto rounded-full"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-2">
            Ready to collaborate on exciting AI projects? Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {personalInfo.email || personalInfo.phone || personalInfo.linkedin || personalInfo.github ? (
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="glass-effect rounded-2xl p-8 hover-lift border border-accent-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Email Me</h3>
                      <p className="text-white/70">Quick response guaranteed</p>
                    </div>
                  </div>
                  <p className="text-primary-300 font-medium">
                    <span className="bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30 hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-300">{personalInfo.email}</span>
                  </p>
                </a>
                
                {personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="glass-effect rounded-2xl p-8 hover-lift border border-accent-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Call Me</h3>
                        <p className="text-white/70">Let's have a conversation</p>
                      </div>
                    </div>
                    <p className="text-accent-300 font-medium">
                      <span className="bg-accent-500/20 px-3 py-1 rounded-full border border-accent-500/30 hover:bg-accent-500/30 hover:border-accent-500/50 transition-all duration-300">{personalInfo.phone}</span>
                    </p>
                  </a>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect rounded-2xl p-8 hover-lift border border-accent-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                      <p className="text-white/70">Professional networking</p>
                    </div>
                  </div>
                  <p className="text-blue-300 font-medium">
                    <span className="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300">Connect with me</span>
                  </p>
                </a>
                
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect rounded-2xl p-8 hover-lift border border-accent-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                      <Github className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">GitHub</h3>
                      <p className="text-white/70">Explore my code</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-medium">
                    <span className="bg-gray-500/20 px-3 py-1 rounded-full border border-gray-500/30 hover:bg-gray-500/30 hover:border-gray-500/50 transition-all duration-300">View repositories</span>
                  </p>
                </a>
              </div>
              
              <div className="mt-12 text-center">
                <div className="glass-effect rounded-2xl p-8 inline-block border border-accent-500/30">
                  <div className="flex items-center justify-center text-white/80 mb-4">
                    <MapPin size={20} className="mr-3 text-primary-500" />
                    <span className="text-lg font-medium">{personalInfo.location}</span>
                  </div>
                  <p className="text-white/60">Available for remote opportunities worldwide</p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/60 text-lg">
                Contact information will be displayed here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact