import React from 'react'

export class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        console.error('Error caught by error boundary:', error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          // You can render a fallback UI here
          return <div>Something went wrong!</div>;
        }
    
        return this.props.children;
      }
    }
    