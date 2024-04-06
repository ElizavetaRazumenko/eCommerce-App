import React, { ErrorInfo } from 'react';

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  State
> {
  public state: State = {
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Something went wrong...</p>
          <p>Please reload the page</p>
        </div>
      );
    }

    return this.props.children;
  }
}
