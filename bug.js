```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // This line might be causing the issue
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: [
    // ... your plugins ...
  ]
}
```