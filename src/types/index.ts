// Tipos TypeScript para la aplicación

export interface ExampleType {
  id: string;
  name: string;
  description?: string;
}

// Re-exportar tipos de productos para facilitar imports
export * from './products';