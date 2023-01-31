import React from 'react';

interface LoadingProps {
  message?: string;
}

export const Loader: React.FC<LoadingProps> = ({ message }={message:"loading.."}) => {
  return (
    <div className="loading-backdrop">
      <div className="loading-spinner">
        <div className="spinner" />
        <p>{message}</p>
      </div>
    </div>
  );
};

