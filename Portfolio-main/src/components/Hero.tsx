import { personalInfo } from '@/data/portfolio'
import { Mail, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden flex items-center justify-center">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/profile.jpg"
          alt="Thennavan Karuppaiah"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 text-center text-white px-4" style={{ marginTop: "22%" }}>
        {/* Big typography for name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
          <div className="mb-4">
            {'THENNAVAN'.split('').map((letter, index) => (
              <span 
                key={index}
                className="inline-block animate-slide"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {letter}
              </span>
            ))}
          </div>
          <div>
            {'KARUPPAIAH'.split('').map((letter, index) => (
              <span 
                key={index}
                className="inline-block animate-slide"
                style={{animationDelay: `${(index + 9) * 0.1}s`}}
              >
                {letter}
              </span>
            ))}
          </div>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light mb-12 opacity-90">
          AI Researcher & Machine Learning Engineer
        </p>
        
        {/* Social links */}
        <div className="flex justify-center space-x-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    
    </section>
  )
}

export default Hero