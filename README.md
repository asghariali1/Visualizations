# Statistical Visualizations 📊

An interactive collection of web-based visualization tools for exploring statistical and computational concepts. Built with vanilla JavaScript and Plotly.js, these visualizations are designed to provide intuitive, real-time insights into complex statistical methods.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.ecmascript.org/)
[![Plotly.js](https://img.shields.io/badge/Plotly.js-2.27.0-blue.svg)](https://plotly.com/javascript/)

## 🎯 Project Overview

This repository contains interactive visualizations that help understand fundamental statistical and computational concepts through hands-on exploration. Each visualization is self-contained and can be run directly in a web browser without any installation or build process.

## 📁 Visualizations

### 1. 2D Multivariate Distribution Visualizer
**Location:** `Gibs Sampling/`

An interactive tool for exploring 2D multivariate probability distributions.

**Features:**
- **Bivariate Normal Distribution**: Classic 2D Gaussian with adjustable means (μ₁, μ₂), standard deviations (σ₁, σ₂), and correlation (ρ)
- **Banana Distribution**: Crescent-shaped distribution commonly used to test MCMC sampling algorithms
- Real-time contour plots showing probability density functions
- Interactive scatter plots of random samples
- Dynamic parameter adjustment with instant visual feedback
- Adjustable sample size (100 to 10,000 samples)

**Use Cases:**
- Understanding correlation in multivariate normal distributions
- Visualizing how parameters affect distribution shape
- Testing sampling algorithms on challenging distributions
- Educational demonstrations of probability theory

**Quick Start:**
```bash
cd "Gibs Sampling"
# Open index.html in your browser
```

---

### 2. Monte Carlo Integration Visualizer
**Location:** `Monte Carlo Intergration/`

A visual demonstration of Monte Carlo integration methods for approximating definite integrals.

**Features:**
- Interactive function plotting with customizable mathematical functions
- Visual representation of Monte Carlo sampling
- Real-time integral approximation
- Comparison of analytical vs. numerical results
- Adjustable parameters for exploration

**Use Cases:**
- Understanding Monte Carlo methods
- Approximating complex integrals
- Visualizing convergence properties
- Educational demonstrations of numerical integration

**Quick Start:**
```bash
cd "Monte Carlo Intergration"
# Open index.html in your browser
```

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser! No installation required.

- Chrome, Firefox, Safari, or Edge (latest versions recommended)
- JavaScript enabled

### Running the Visualizations

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asghariali1/Visualizations.git
   cd Visualizations
   ```

2. **Choose a visualization:**
   Navigate to the folder of the visualization you want to explore.

3. **Open in browser:**
   Simply open the `index.html` file in your web browser:
   ```bash
   # Option 1: Direct opening
   open "Gibs Sampling/index.html"  # macOS
   xdg-open "Gibs Sampling/index.html"  # Linux
   start "Gibs Sampling/index.html"  # Windows
   
   # Option 2: Using a local server (recommended)
   python3 -m http.server 8000
   # Then navigate to http://localhost:8000
   ```

## 🛠️ Technology Stack

- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Core logic and interactivity
- **Plotly.js**: High-performance interactive charts and visualizations
- **No framework dependencies**: Pure vanilla JavaScript for simplicity and performance

## 📂 Project Structure

```
Visualizations/
├── README.md                          # This file
├── visu.code-workspace               # VS Code workspace configuration
├── Gibs Sampling/                    # Multivariate distribution visualizer
│   ├── index.html                    # Main HTML structure
│   ├── script.js                     # Distribution logic and plotting
│   ├── styles.css                    # Styling
│   └── README.md                     # Detailed documentation
└── Monte Carlo Intergration/         # Monte Carlo integration visualizer
    ├── index.html                    # Main HTML with embedded code
    ├── Montecarlo.js                 # Function definitions and utilities
    └── README.md                     # Detailed documentation
```

## 🎓 Educational Value

These visualizations are designed to help:

- **Students** learn statistical concepts through interactive exploration
- **Educators** demonstrate complex ideas with visual aids
- **Researchers** prototype and test sampling algorithms
- **Data Scientists** build intuition about statistical distributions
- **Developers** understand Monte Carlo methods and probability

## 🤝 Contributing

Contributions are welcome! Here are some ways you can contribute:

- 🐛 Report bugs or issues
- 💡 Suggest new visualizations or features
- 📝 Improve documentation
- 🎨 Enhance UI/UX design
- ✨ Add new statistical concepts

**To contribute:**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Visualizations

Planned additions to this collection:

- [ ] Markov Chain Monte Carlo (MCMC) sampling
- [ ] Gibbs Sampling visualization
- [ ] Bayesian inference demonstrations
- [ ] Central Limit Theorem interactive proof
- [ ] Hypothesis testing visualizations
- [ ] Time series analysis tools
- [ ] Maximum Likelihood Estimation

## 📄 License

This project is licensed under the MIT License - feel free to use these visualizations for educational or commercial purposes.

```
MIT License

Copyright (c) 2025 Ali Asghari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Ali Asghari**
- GitHub: [@asghariali1](https://github.com/asghariali1)

## 🙏 Acknowledgments

- Plotly.js for the excellent charting library
- The statistics and data science community for inspiration
- All contributors who help improve these visualizations

## 📞 Contact & Support

If you have questions, suggestions, or need help:

- Open an issue on GitHub
- Star ⭐ this repository if you find it useful!
- Share with others who might benefit from these visualizations

---

**Built with ❤️ for the statistics and data science community**
