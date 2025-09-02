# Toto Design System (DX)

A unified design system for the entire Toto ecosystem, providing consistent components, styles, and design tokens across all Toto applications.

## 🎯 Overview

The Toto Design System ensures brand consistency and improves developer experience across:
- **toto-app** - Main application
- **toto-bo** - Backoffice dashboard
- **toto-docs** - Documentation site
- **toto-landing** - Marketing landing page
- **toto-investors** - Investor portal
- **toto-wallet** - Wallet system

## 🚀 Quick Start

### Installation

```bash
npm install toto-dx
```

### Basic Usage

```tsx
import { Button, TotoLogo, Card } from 'toto-dx';
import 'toto-dx/dist/styles.css';

function App() {
  return (
    <div>
      <TotoLogo size={48} variant="default" />
      <Button variant="primary">Click me</Button>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Toto</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a unified design system component.</p>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 🎨 Design Tokens

### Colors

The design system uses a consistent color palette:

- **Primary**: `#FDB813` (Golden Yellow)
- **Secondary**: `#5CB85C` (Emerald Green)
- **Accent**: `#337AB7` (Blue)
- **Error**: `#D9534F` (Red)

### Typography

- **Font Family**: Inter, Open Sans, system fonts
- **Heading Font**: Raleway, Inter, Lato, Nunito
- **Monospace**: JetBrains Mono, Fira Code

## 🧩 Components

### TotoLogo

Unified logo component with multiple variants:

```tsx
<TotoLogo size={48} variant="default" />
<TotoLogo size={32} variant="minimal" />
<TotoLogo size={24} variant="text" />
```

### Button

Consistent button component with multiple variants:

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Card

Flexible card component for content organization:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## 🛠️ Development

### Setup

```bash
git clone https://github.com/DataTom7/toto-dx.git
cd toto-dx
npm install
```

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Storybook

```bash
npm run storybook
```

## 📦 Package Structure

```
src/
├── components/          # React components
├── tokens/             # Design tokens (colors, typography, spacing)
├── styles/             # Global CSS styles
├── utils/              # Utility functions
└── index.ts            # Main export file
```

## 🎯 Goals

1. **Consistency**: Unified look and feel across all Toto applications
2. **Efficiency**: Reusable components reduce development time
3. **Maintainability**: Single source of truth for design decisions
4. **Accessibility**: Built-in accessibility features
5. **Performance**: Optimized bundle size and runtime performance

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/DataTom7/toto-dx)
- [Documentation](https://docs.betoto.pet)
- [Toto Ecosystem](https://betoto.pet)
