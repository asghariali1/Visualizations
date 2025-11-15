# 2D Multivariate Distribution Visualizer

An interactive visualization tool for exploring 2D multivariate probability distributions using JavaScript and Plotly.js.

## Features

### Supported Distributions

1. **Bivariate Normal Distribution**
   - Classic 2D Gaussian distribution
   - Adjustable mean (μ₁, μ₂)
   - Adjustable standard deviations (σ₁, σ₂)
   - Correlation parameter (ρ) from -0.95 to 0.95

2. **Banana Distribution**
   - Crescent-shaped (banana-shaped) distribution
   - Commonly used to test MCMC sampling algorithms
   - Adjustable curvature parameter
   - Adjustable spread parameters

### Visualizations

- **Contour Plot**: Shows the probability density function as a heatmap with contour lines
- **Scatter Plot**: Displays random samples drawn from the distribution

### Interactive Controls

- Real-time parameter adjustment with sliders
- Dynamic visualization updates
- Resample button to generate new random samples
- Adjustable number of samples (100 to 10,000)

## Files Structure

```
Gibs Sampling/
├── index.html      # Main HTML structure
├── styles.css      # All styling and layout
└── script.js       # Distribution logic and plotting functions
```

## How to Use

1. Open `index.html` in a web browser
2. Select a distribution type from the dropdown
3. Adjust parameters using the sliders
4. Watch the visualizations update in real-time
5. Click "Resample" to generate new random samples

## Technical Details

### Bivariate Normal Distribution

The probability density function:

$$f(x, y) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}} \exp\left(-\frac{1}{2(1-\rho^2)}\left[\frac{(x-\mu_1)^2}{\sigma_1^2} - \frac{2\rho(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2} + \frac{(y-\mu_2)^2}{\sigma_2^2}\right]\right)$$

Sampling uses the Box-Muller transform with correlation.

### Banana Distribution

Created by applying a nonlinear transformation to a bivariate normal:

$$y_{transformed} = y - b(x^2 - 1)$$

where `b` is the curvature parameter. This creates a crescent shape that's challenging for many sampling algorithms.

## Technologies Used

- **Plotly.js** - Interactive plotting library
- **Vanilla JavaScript** - No framework dependencies
- **CSS Grid & Flexbox** - Responsive layout
- **Box-Muller Transform** - For generating normal random variables

## Author

Ali Asghari

## License

Open source - feel free to use and modify!
