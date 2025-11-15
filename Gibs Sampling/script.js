// ==================== BIVARIATE NORMAL DISTRIBUTION ====================

// Bivariate Normal PDF
function bivariateNormalPDF(x, y, muX, muY, sigmaX, sigmaY, rho) {
  const z0 = (x - muX) / sigmaX;
  const z1 = (y - muY) / sigmaY;
  const exp_term = -0.5 / (1 - rho * rho) * (z0 * z0 - 2 * rho * z0 * z1 + z1 * z1);
  return Math.exp(exp_term) / (2 * Math.PI * sigmaX * sigmaY * Math.sqrt(1 - rho * rho));
}

// Generate samples from bivariate normal distribution
function bivariateNormalSamples(muX, muY, sigmaX, sigmaY, rho, numSamples) {
  const samples = { x: [], y: [] };
  
  for (let i = 0; i < numSamples; i++) {
    // Box-Muller transform
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);
    
    // Apply correlation and scaling
    const x = muX + sigmaX * z0;
    const y = muY + sigmaY * (rho * z0 + Math.sqrt(1 - rho * rho) * z1);
    
    samples.x.push(x);
    samples.y.push(y);
  }
  return samples;
}

// Create density grid for bivariate normal
function createBivariateNormalGrid(muX, muY, sigmaX, sigmaY, rho, gridSize = 100) {
  const x = [];
  const y = [];
  const z = [];
  
  const xMin = muX - 4 * sigmaX;
  const xMax = muX + 4 * sigmaX;
  const yMin = muY - 4 * sigmaY;
  const yMax = muY + 4 * sigmaY;
  
  for (let i = 0; i < gridSize; i++) {
    x.push(xMin + (xMax - xMin) * i / (gridSize - 1));
    y.push(yMin + (yMax - yMin) * i / (gridSize - 1));
  }
  
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      const density = bivariateNormalPDF(x[j], y[i], muX, muY, sigmaX, sigmaY, rho);
      row.push(density);
    }
    z.push(row);
  }
  
  return { x, y, z };
}

// ==================== BANANA DISTRIBUTION ====================

// Banana distribution transformation
function bananaTransform(x, y, curvature) {
  // Apply banana-shaped transformation
  const yTransformed = y - curvature * (x * x - 1);
  return { x: x, y: yTransformed };
}

// Inverse banana transformation
function inverseBananaTransform(x, y, curvature) {
  const yOriginal = y + curvature * (x * x - 1);
  return { x: x, y: yOriginal };
}

// Generate samples from banana distribution
function bananaSamples(curvature, sigmaX, sigmaY, numSamples) {
  const samples = { x: [], y: [] };
  
  for (let i = 0; i < numSamples; i++) {
    // Generate standard normal samples
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);
    
    // Scale by standard deviations
    const x = sigmaX * z0;
    const y = sigmaY * z1;
    
    // Apply banana transformation
    const transformed = bananaTransform(x, y, curvature);
    
    samples.x.push(transformed.x);
    samples.y.push(transformed.y);
  }
  return samples;
}

// Create density grid for banana distribution
function createBananaGrid(curvature, sigmaX, sigmaY, gridSize = 100) {
  const x = [];
  const y = [];
  const z = [];
  
  const xMin = -4 * sigmaX;
  const xMax = 4 * sigmaX;
  const yMin = -4 * sigmaY - curvature * 16;
  const yMax = 4 * sigmaY + curvature * 16;
  
  for (let i = 0; i < gridSize; i++) {
    x.push(xMin + (xMax - xMin) * i / (gridSize - 1));
    y.push(yMin + (yMax - yMin) * i / (gridSize - 1));
  }
  
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      // Transform back to original space for density calculation
      const original = inverseBananaTransform(x[j], y[i], curvature);
      
      // Calculate standard normal density in original space
      const densityX = Math.exp(-0.5 * Math.pow(original.x / sigmaX, 2)) / (sigmaX * Math.sqrt(2 * Math.PI));
      const densityY = Math.exp(-0.5 * Math.pow(original.y / sigmaY, 2)) / (sigmaY * Math.sqrt(2 * Math.PI));
      const density = densityX * densityY;
      
      row.push(density);
    }
    z.push(row);
  }
  
  return { x, y, z };
}

// ==================== PLOTTING FUNCTIONS ====================

// Plot contour
function plotContour(grid, title) {
  const data = [{
    type: 'contour',
    x: grid.x,
    y: grid.y,
    z: grid.z,
    colorscale: 'Viridis',
    contours: {
      coloring: 'heatmap'
    },
    colorbar: {
      title: 'Density',
      titleside: 'right'
    }
  }];
  
  const layout = {
    title: title,
    xaxis: { title: 'X' },
    yaxis: { title: 'Y' },
    width: null,
    height: 400,
    margin: { l: 60, r: 60, t: 60, b: 60 }
  };
  
  const config = { responsive: true };
  
  Plotly.newPlot('contourPlot', data, layout, config);
}

// Plot scatter
function plotScatter(samples, numSamples, title) {
  const data = [{
    type: 'scatter',
    mode: 'markers',
    x: samples.x,
    y: samples.y,
    marker: {
      size: 4,
      color: samples.x,
      colorscale: 'Viridis',
      opacity: 0.6,
      showscale: false
    }
  }];
  
  const layout = {
    title: title,
    xaxis: { title: 'X' },
    yaxis: { title: 'Y' },
    width: null,
    height: 400,
    margin: { l: 60, r: 60, t: 60, b: 60 }
  };
  
  const config = { responsive: true };
  
  Plotly.newPlot('scatterPlot', data, layout, config);
}

// ==================== UI CONTROL FUNCTIONS ====================

function getDistributionType() {
  return document.getElementById('distributionType').value;
}

function updateControlsVisibility() {
  const distType = getDistributionType();
  
  // Hide all parameter groups
  document.querySelectorAll('.distribution-params').forEach(el => {
    el.classList.remove('active');
  });
  
  // Show relevant parameter group
  if (distType === 'normal') {
    document.getElementById('normalParams').classList.add('active');
  } else if (distType === 'banana') {
    document.getElementById('bananaParams').classList.add('active');
  }
}

// Update all plots based on current distribution
function updatePlots() {
  const distType = getDistributionType();
  const numSamples = parseInt(document.getElementById('numSamples').value);
  
  if (distType === 'normal') {
    updateNormalPlots(numSamples);
  } else if (distType === 'banana') {
    updateBananaPlots(numSamples);
  }
}

function updateNormalPlots(numSamples) {
  const muX = parseFloat(document.getElementById('muX').value);
  const muY = parseFloat(document.getElementById('muY').value);
  const sigmaX = parseFloat(document.getElementById('sigmaX').value);
  const sigmaY = parseFloat(document.getElementById('sigmaY').value);
  const rho = parseFloat(document.getElementById('rho').value);
  
  // Update displays
  document.getElementById('muXDisplay').textContent = muX.toFixed(1);
  document.getElementById('muYDisplay').textContent = muY.toFixed(1);
  document.getElementById('sigmaXDisplay').textContent = sigmaX.toFixed(1);
  document.getElementById('sigmaYDisplay').textContent = sigmaY.toFixed(1);
  document.getElementById('rhoDisplay').textContent = rho.toFixed(2);
  
  const grid = createBivariateNormalGrid(muX, muY, sigmaX, sigmaY, rho);
  const samples = bivariateNormalSamples(muX, muY, sigmaX, sigmaY, rho, numSamples);
  
  plotContour(grid, 'Bivariate Normal - Probability Density');
  plotScatter(samples, numSamples, `Bivariate Normal - Samples (n=${numSamples})`);
}

function updateBananaPlots(numSamples) {
  const curvature = parseFloat(document.getElementById('curvature').value);
  const sigmaXBanana = parseFloat(document.getElementById('sigmaXBanana').value);
  const sigmaYBanana = parseFloat(document.getElementById('sigmaYBanana').value);
  
  // Update displays
  document.getElementById('curvatureDisplay').textContent = curvature.toFixed(1);
  document.getElementById('sigmaXBananaDisplay').textContent = sigmaXBanana.toFixed(1);
  document.getElementById('sigmaYBananaDisplay').textContent = sigmaYBanana.toFixed(1);
  
  const grid = createBananaGrid(curvature, sigmaXBanana, sigmaYBanana);
  const samples = bananaSamples(curvature, sigmaXBanana, sigmaYBanana, numSamples);
  
  plotContour(grid, 'Banana Distribution - Probability Density');
  plotScatter(samples, numSamples, `Banana Distribution - Samples (n=${numSamples})`);
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('DOMContentLoaded', function() {
  // Distribution type change
  document.getElementById('distributionType').addEventListener('change', function() {
    updateControlsVisibility();
    updatePlots();
  });
  
  // Bivariate normal controls
  document.getElementById('muX').addEventListener('input', updatePlots);
  document.getElementById('muY').addEventListener('input', updatePlots);
  document.getElementById('sigmaX').addEventListener('input', updatePlots);
  document.getElementById('sigmaY').addEventListener('input', updatePlots);
  document.getElementById('rho').addEventListener('input', updatePlots);
  
  // Banana distribution controls
  document.getElementById('curvature').addEventListener('input', updatePlots);
  document.getElementById('sigmaXBanana').addEventListener('input', updatePlots);
  document.getElementById('sigmaYBanana').addEventListener('input', updatePlots);
  
  // Resample button
  document.getElementById('resampleBtn').addEventListener('click', updatePlots);
  
  // Initial setup
  updateControlsVisibility();
  updatePlots();
});
