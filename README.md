# Academic Personal Website

A modern, responsive personal website for a health policy PhD student, built with HTML, CSS, and JavaScript. This website is designed to be hosted on GitHub Pages.

## Features

- **Modern Design**: Clean, professional layout with a gradient hero section
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Sections Included**:
  - About
  - Research Interests
  - Publications (Working Papers, Published Papers, Work in Progress)
  - CV Download
  - Contact Information

## Setup Instructions

### 1. Customize Your Content

Edit `index.html` and update the following:

- **Name**: Replace "Your Name" throughout the file
- **Email**: Update `your.email@university.edu` with your actual email
- **Institution**: Add your university and department
- **Location**: Add your city and state
- **Social Links**: Update Twitter, LinkedIn, Google Scholar, and GitHub links
- **Research Interests**: Customize the research cards in the Research section
- **Publications**: Add your actual publications, working papers, and work in progress
- **About Section**: Write your personal bio and research focus

### 2. Add Your CV

1. Save your CV as `Stacy_Chen_CV.pdf` in the root directory
2. The CV download button will automatically link to it

### 3. Deploy to GitHub Pages

#### Option A: Using GitHub Repository

1. Create a new repository on GitHub (e.g., `yourusername.github.io` or any repository name)
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub
4. Navigate to "Pages" in the left sidebar
5. Under "Source", select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"
8. Your site will be available at `https://yourusername.github.io/your-repo-name/` (or `https://yourusername.github.io/` if the repo is named `yourusername.github.io`)

#### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. Add this folder as a repository
3. Publish to GitHub
4. Follow steps 3-8 from Option A

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the root directory with your domain name
2. Configure DNS settings with your domain provider
3. Update the domain settings in GitHub Pages settings

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript for interactivity
├── .nojekyll           # Prevents Jekyll processing
├── cv.pdf             # Your CV (add this file)
└── README.md          # This file
```

## Customization Tips

### Colors

Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --primary-dark: #1e40af;     /* Darker shade for hover */
    --secondary-color: #64748b;  /* Secondary text color */
    /* ... */
}
```

### Fonts

The site uses Google Fonts (Inter). To change fonts, update the font link in `index.html` and the `font-family` in `styles.css`.

### Adding Sections

To add new sections:

1. Add a new `<section>` in `index.html`
2. Add a corresponding navigation link
3. Style it in `styles.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is free to use and modify for personal academic websites.

## Credits

Built with modern web technologies:
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)

---


