# Oh See Software Tailwind Configuration

The standard TailwindCSS configuration for a Oh See Software project.

# Updating the configuration

Colors are managed in `index.js`. Each brand color is exported with a `-lighten` and a `-darken` suffix which alter the brightness of the color by 15%.

Colors will be available via `brand-${color}`, `brand-${color}-lighten`, and `brand-${color}-darken`.

Committing updates will run semantic release as part of the GitHub Actions script.
