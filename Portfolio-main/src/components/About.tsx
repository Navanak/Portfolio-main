import { personalInfo } from '@/data/portfolio'
import { User, Target, Lightbulb } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-700 mx-auto rounded-full mb-8"></div>
            
            <div className="mb-8">
              <Image
                src="/images/img-profile.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full object-cover border-4 border-accent-500/50 hover-lift mx-auto shadow-xl"
                style={{ borderRadius: '50%', width: '200px', height: '200px' }}
              />
            </div>
            
            <div className="mb-8">
              <div className="glass-effect rounded-2xl p-8 hover-lift border border-accent-500/30">
                <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                  {personalInfo.summary}
                </p>
              </div>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8 hover-lift border border-accent-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Transforming complex datasets into actionable insights through applied Machine Learning and Generative AI, 
                with a focus on building scalable AI systems that solve real-world problems.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 hover-lift border border-accent-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">What I Do</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                I specialize in developing end-to-end data pipelines, training ML models, and implementing 
                Retrieval-Augmented Generation (RAG) systems using Large Language Models.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About