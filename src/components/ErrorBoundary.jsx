import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 rounded-3xl glass-morphism border border-red-500/20 text-center my-8">
          <h3 className="text-xl font-bold text-white mb-4">Something went wrong</h3>
          <p className="text-slate-400 mb-6">
            {this.props.message || "We couldn't load this section."}
          </p>
          <a 
            href="https://github.com/VWINDQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline inline-flex items-center"
          >
            View on GitHub →
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
