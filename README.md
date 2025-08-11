# Binke Xu - Portfolio Website

A modern, responsive personal portfolio website built with React.js showcasing academic achievements, technical skills, research publications, and professional experience.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Multi-Section Layout**: Home, Skills, Projects, Publications, and Contact sections
- **Professional Styling**: Clean, modern design with consistent spacing and typography
- **Interactive Elements**: Hover effects, smooth transitions, and professional animations
- **Logo Integration**: Real technology logos for skills and tools
- **CV Download**: Functional CV download button for visitors
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Technologies Used

### Frontend Framework
- **React.js 19.1.1** - Modern React with hooks and functional components
- **CSS3** - Custom styling with Flexbox, Grid, and modern CSS features
- **Responsive Design** - Mobile-first approach with media queries

### Key Libraries
- **gh-pages** - GitHub Pages deployment
- **React Router** - Navigation between sections
- **Modern CSS** - Flexbox, Grid, CSS Variables, and animations

## 📁 Project Structure

```
my-website/
├── public/                 # Static assets
│   ├── index.html         # Main HTML file
│   ├── favicon.ico        # Website icon
│   └── Binke_Xu_CV.pdf   # CV file for download
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Home.js        # Home page component
│   │   ├── Skills.js      # Skills and expertise
│   │   ├── Projects.js    # Work experience and projects
│   │   ├── Publications.js # Research publications
│   │   ├── Contact.js     # Contact information
│   │   └── Navbar.js      # Navigation component
│   ├── logos/             # Technology logos
│   │   ├── Python.png     # Python logo
│   │   ├── React.png      # React logo
│   │   ├── Java.png       # Java logo
│   │   └── ...            # Other technology logos
│   ├── App.js             # Main application component
│   ├── App.css            # Global styles
│   └── index.js           # Application entry point
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎯 Website Sections

### 1. **Home Section**
- Professional introduction and hero section
- About Me with key statistics
- Education details (Master's and Bachelor's degrees)
- Download CV functionality

### 2. **Skills Section**
- **Technical Skills**: Python, PyTorch, Java, Node.js, React, SQL, Azure, Git, PostgreSQL
- **Tools & Technologies**: GitLab, Agile, CI/CD, OpenCV, Pandas, NumPy, TensorFlow, Firebase, React Native
- **Soft Skills**: Problem Solving, Teamwork, Communication, Adaptability
- **Certifications**: Microsoft Azure Fundamentals (AZ-900), Azure AI Fundamentals (AI-900)

### 3. **Projects Section**
- Work experience and engineering projects
- Project descriptions and technologies used
- Professional achievements and contributions

### 4. **Publications Section**
- IEEE research publications
- Conference presentations
- Research areas and collaborations
- Academic achievements

### 5. **Contact Section**
- Professional contact information
- Social media links (LinkedIn)
- Location and availability details

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/BinkeXu/binke-xu-portfolio.git
   cd binke-xu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The website will automatically reload on file changes

### Building for Production
```bash
npm run build
```

### Deployment to GitHub Pages
```bash
npm run deploy
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #667eea (Blue)
- **Secondary**: #764ba2 (Purple)
- **Text**: #2c3e50 (Dark Blue)
- **Background**: #f8f9fa (Light Gray)
- **Accent**: #BFECFF, #C6E7FF (Light Blue)

### Typography
- **Headings**: Modern, bold fonts with consistent sizing
- **Body Text**: Readable fonts with proper line spacing
- **Responsive**: Font sizes adjust for different screen sizes

### Layout
- **Grid System**: CSS Grid for responsive layouts
- **Flexbox**: Flexible component layouts
- **Spacing**: Consistent 60px margins between sections
- **Cards**: Professional card-based design for content

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

### Mobile Features
- Touch-friendly navigation
- Optimized layouts for small screens
- Responsive images and logos
- Mobile-first CSS approach

## 🔧 Customization

### Adding New Sections
1. Create new component in `src/components/`
2. Add CSS file for styling
3. Import and add to `App.js`
4. Update navigation in `Navbar.js`

### Modifying Content
- **Skills**: Update arrays in `Skills.js`
- **Projects**: Modify data in `Projects.js`
- **Publications**: Edit publications array in `Publications.js`
- **Contact**: Update contact details in `Contact.js`

### Styling Changes
- Global styles in `src/App.css`
- Component-specific styles in individual CSS files
- Color variables can be updated for theme changes

## 📊 Performance Features

- **Optimized Images**: Compressed logos and images
- **Efficient CSS**: Minimal CSS with modern properties
- **Fast Loading**: Optimized React components
- **SEO Ready**: Semantic HTML structure

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Works on older browsers with basic functionality

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Binke Xu**
- Master of Science in Artificial Intelligence
- Victoria University of Wellington
- Specializing in AI and Software Engineering
- [LinkedIn Profile](https://www.linkedin.com/in/binke-xu-/)

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: Binkexu@gmail.com
- **LinkedIn**: [linkedin.com/in/binke-xu-/](https://www.linkedin.com/in/binke-xu-/)
- **Location**: Wellington, New Zealand

---

**Built with ❤️ using React.js and modern web technologies**
