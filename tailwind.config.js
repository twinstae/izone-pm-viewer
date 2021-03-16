const production = !process.env.ROLLUP_WATCH; // Or some other env var like NODE_ENV
module.exports = {
  future: { // For Tailwind 2.0 upcoming changes
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: [
      "./src/**/*.svelte",
      "./public/**/*.html"
    ], 
    enabled: production // Disable purge in dev
  },
};