# Binke Xu - Portfolio Website

A modern, responsive personal portfolio website built with React.js showcasing academic achievements, technical skills, research publications, and professional experience.

## 🌟 Features

- **Welcome Landing Page**: Beautiful glassmorphism design with typewriter effect
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Multi-Section Layout**: Welcome, Home, Skills, Projects, Publications, and Contact sections
- **Interactive Project Cards**: Click-to-expand project details with filtering and sorting
- **Advanced Filtering System**: Sort projects by year and filter by technology stack
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
- **Google Fonts** - Artistic typography (Tangerine, Cinzel, Playfair Display)
- **CSS Animations** - Keyframe animations and transitions

## 📁 Project Structure

```
my-website/
├── public/                 # Static assets
│   ├── index.html         # Main HTML file
│   ├── favicon.ico        # Website icon
│   └── Binke_Xu_CV.pdf   # CV file for download
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Welcome.js     # Welcome landing page with glassmorphism
│   │   ├── Welcome.css    # Welcome page styles and animations
│   │   ├── Home.js        # Home page component
│   │   ├── Skills.js      # Skills and expertise
│   │   ├── Projects.js    # Work experience and projects with filtering
│   │   ├── Publications.js # Research publications
│   │   ├── Contact.js     # Contact information with social links
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

### 1. **Welcome Section** 🌟
- **Glassmorphism Design**: Beautiful frosted glass effect with backdrop blur
- **Typewriter Effect**: Dynamic text animation that types out the welcome message
- **Artistic Typography**: Elegant fonts (Tangerine, Cinzel, Playfair Display)
- **Gradient Background**: Golden to orange gradient with animated elements
- **One-Time Landing**: Displays only on first visit, then navigates to main site
- **Responsive Design**: Optimized for all screen sizes

### 2. **Home Section**
- Professional introduction and hero section
- About Me with key statistics
- Education details (Master's and Bachelor's degrees)
- Download CV functionality

### 3. **Skills Section**
- **Technical Skills**: Python, PyTorch, Java, Node.js, React, SQL, Azure, Git, PostgreSQL
- **Tools & Technologies**: GitLab, Agile, CI/CD, OpenCV, Pandas, NumPy, TensorFlow, Firebase, React Native
- **Soft Skills**: Problem Solving, Teamwork, Communication, Adaptability
- **Certifications**: Microsoft Azure Fundamentals (AZ-900), Azure AI Fundamentals (AI-900)

### 4. **Projects Section** 🆕
- **Interactive Project Cards**: Click to expand and view full project details
- **Advanced Filtering System**: 
  - Sort by Year (newest first) or Tech Stack Complexity
  - Filter by specific technologies (Python, Machine Learning, React, etc.)
  - Smart tech detection for commonly used technologies
- **Work Experience**: Professional achievements and research contributions
- **Project Technologies**: Comprehensive tech stack display with expandable details
- **Code Links**: Direct GitHub repository access for available projects

### 5. **Publications Section**
- IEEE research publications
- Conference presentations
- Research areas and collaborations
- Academic achievements

### 6. **Contact Section** 🆕
- Professional contact information
- **Social Media Integration**: LinkedIn and GitHub profiles
- **GitHub Profile**: Direct link to [github.com/BinkeXu](https://github.com/BinkeXu)
- Location and availability details
- Responsive social media buttons with platform-specific styling

## 🆕 Recent Updates

### Project Filtering & Sorting System
- **Year-based Sorting**: Projects automatically sorted by year (newest first)
- **Tech Stack Filtering**: Filter projects by specific technologies
- **Smart Technology Detection**: Automatically identifies common tech stacks across projects
- **Always-Available Filters**: Python and Machine Learning always available for filtering
- **Project Count Display**: Shows filtered results count

### Enhanced User Experience
- **Click-to-Expand Cards**: Project cards only expand on click (no hover expansion)
- **Single Card Expansion**: Only one project card expanded at a time
- **Background Click to Collapse**: Click outside cards to collapse all
- **Responsive Filter Controls**: Mobile-optimized filter interface

### GitHub Integration
- **GitHub Profile Link**: Added to contact section
- **Repository Links**: Direct access to project code
- **Professional Branding**: Consistent with LinkedIn and other social profiles

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

### Welcome Page Features
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur effects
- **Typewriter Animation**: Dynamic text typing effect with blinking cursor
- **Artistic Fonts**: Google Fonts integration for elegant typography
- **Gradient Backgrounds**: Beautiful color transitions (#dfb34d to #f74a06)
- **Floating Elements**: Subtle animated background decorations
- **Responsive Typography**: Font sizes that adapt to screen sizes

### Project Section Features
- **Interactive Cards**: Smooth expand/collapse animations
- **Filter Controls**: Modern dropdown design with hover effects
- **Tech Tags**: Color-coded technology indicators
- **Responsive Grid**: Adaptive layout for all screen sizes

### Color Scheme
- **Primary**: #667eea (Blue)
- **Secondary**: #764ba2 (Purple)
- **Text**: #2c3e50 (Dark Blue)
- **Background**: #f8f9fa (Light Gray)
- **Accent**: #BFECFF, #C6E7FF (Light Blue)
- **Welcome Background**: #dfb34d to #f74a06 (Golden to Orange gradient)
- **GitHub**: #24292e to #586069 (Dark Gray gradient)
- **LinkedIn**: #0077b5 to #00a0dc (Blue gradient)

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
- **Filter Controls**: Stack vertically on mobile devices

## 🔧 Customization

### Adding New Sections
1. Create new component in `src/components/`
2. Add CSS file for styling
3. Import and add to `App.js`
4. Update navigation in `Navbar.js`

### Project Filtering Customization
- **Add New Technologies**: Update the `importantTechs` array in `Projects.js`
- **Modify Filter Logic**: Adjust the `getCommonTechStacks()` function
- **Change Sort Options**: Add new sorting criteria in `getFilteredAndSortedProjects()`

### Welcome Page Customization
- **Fonts**: Update `@import` URL in `Welcome.css` and modify `font-family` properties
- **Colors**: Change background gradients and text colors in CSS variables
- **Animations**: Modify `@keyframes` for timing and effects
- **Layout**: Adjust padding, margins, and positioning in CSS classes
- **Typewriter Speed**: Change animation duration in responsive media queries

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
- **Smart Filtering**: Efficient project filtering algorithms

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
- [GitHub Profile](https://github.com/BinkeXu)

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: Binkexu@gmail.com
- **LinkedIn**: [linkedin.com/in/binke-xu-/](https://www.linkedin.com/in/binke-xu-/)
- **GitHub**: [github.com/BinkeXu](https://github.com/BinkeXu)
- **Location**: Wellington, New Zealand
- **Website**: [binkexu.github.io/binke-xu-portfolio/](https://binkexu.github.io/binke-xu-portfolio/)
---

**Built with ❤️ using React.js and modern web technologies**
