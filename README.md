# Neotropica Showroom

Welcome to the Neotropica Showroom application! This app is designed to run on tablets in an aquarium showroom, providing visitors with an interactive and informative experience.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17.1, 20.3.0, 22.0.0, or higher. Note that versions 19 and 21 are not supported. [Download Node.js](https://nodejs.org/)

- **Package Manager**: npm (comes with Node.js), pnpm, or Yarn.

- **Git**: For version control. [Download Git](https://git-scm.com/)

- **Text Editor**: We recommend [Visual Studio Code](https://code.visualstudio.com/) with the [Official Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

## Getting Started

Follow these steps to set up the project:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/dsedmak/neotropica-showroom.git
   cd neotropica-showroom
   ```

2. **Install Dependencies**:

   Depending on your preferred package manager, run one of the following commands:

   ```bash
   # Using npm
   npm install

   # Using pnpm
   pnpm install

   # Using Yarn
   yarn install
   ```

3. **Start the Development Server**:

   Launch the Astro development server to preview your project:

   ```bash
   # Using npm
   npm run dev

   # Using pnpm
   pnpm run dev

   # Using Yarn
   yarn dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Project Structure

The project is organized as follows:

```
├── README.md
├── astro.config.mjs
├── package.json
├── public
│   ├── assets
│   └── ...
└── src
    ├── components
    │   └── ...
    ├── layouts
    │   └── ...
    ├── pages
    │   └── ...
    ├── styles
    │   └── ...
    └── data
        └── ...
```

- **`astro.config.mjs`**: Astro configuration file.
- **`public/`**: Static assets like assets and fonts.
- **`src/components/`**: Reusable UI components.
- **`src/layouts/`**: Layout components.
- **`src/pages/`**: Application pages.
- **`src/styles/`**: Global and component-specific styles.
- **`src/data/`**: Data files (e.g., JSON or YAML) for dynamic content.

## Development Workflow

To contribute or make changes:

1. **Create a New Branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**:

   Edit the code using your preferred text editor.

3. **Commit Your Changes**:

   ```bash
   git add .
   git commit -m "Add description of your changes"
   ```

4. **Push to GitHub**:

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**:

   Open a pull request on GitHub to merge your changes into the main branch.

## Building for Production

To prepare the application for production deployment:

```bash
# Using npm
npm run build

# Using pnpm
pnpm run build

# Using Yarn
yarn build
```

The optimized output will be in the `dist/` directory.

## Learn More

For more information on Astro, visit the [official Astro documentation](https://docs.astro.build/).
