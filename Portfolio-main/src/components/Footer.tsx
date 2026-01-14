import { personalInfo } from '@/data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#ffffff1a] border-t border-white/10 py-8">
      <div className="container-max section-padding">
        <div className="text-center">
          <p className="text-white/60 mb-2">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer