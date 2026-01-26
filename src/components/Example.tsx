import React from 'react';

interface ExampleProps {
  title: string;
  description?: string;
}

export const Example: React.FC<ExampleProps> = ({ title, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      {description && (
        <p className="mt-2 text-gray-600">{description}</p>
      )}
    </div>
  );
};