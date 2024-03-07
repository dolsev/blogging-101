import React from "react";

interface ErrorComponentProps {
    error: any;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
    return <div>Something went wrong! Error: {error}</div>;
};

export default ErrorComponent;
