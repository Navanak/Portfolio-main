# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🎨 Beautiful UI with Tailwind CSS
- 📧 Contact section with social links
- 🔍 SEO optimized
- ♿ Accessible design
- 🚀 Easy to deploy

## Sections

- **Hero** - Name, title, and contact buttons
- **About** - Professional summary
- **Education** - Academic background with Master's degree highlighted
- **Experience** - Professional work experience
- **Projects** - Showcase of personal/academic projects
- **Skills** - Technical skills organized by category
- **Certifications** - Professional certifications and achievements
- **Contact** - Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone or download this repository**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Customize your information**
   
   Edit the file `src/data/portfolio.ts` with your personal information:
   - Personal details (name, title, email, etc.)
   - Education background
   - Work experience
   - Projects
   - Skills
   - Certifications

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization

### Personal Information

Update `src/data/portfolio.ts` with your details:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  // ... other details
}
```

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes

### Adding Sections

To add new sections:
1. Create a new component in `src/components/`
2. Add the component to `src/app/page.tsx`
3. Update navigation in `src/components/Header.tsx`

## Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Import your repository
   - Deploy automatically

3. **Custom Domain (Optional)**
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Other Platforms

The portfolio can also be deployed to:
- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `npm run build` and deploy the `out` folder
- **AWS S3 + CloudFront**: Upload the `out` folder to S3
- **Any static hosting service**

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts
│   └── types/
│       └── index.ts
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **ESLint** - Code linting and formatting

## Performance Features

- Static site generation (SSG)
- Optimized images and fonts
- Minimal JavaScript bundle
- Fast page loads
- SEO optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio:
1. Check the documentation above
2. Review the code comments
3. Look at the example data in `portfolio.ts`

---

**Ready to showcase your skills? Update the data file and deploy your portfolio today!** 🚀