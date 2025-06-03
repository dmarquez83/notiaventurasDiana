import { render, screen } from "@testing-library/react";
import App from "./App";

// Test 1: Verifica que la aplicación se renderice sin errores
test("renders without crashing", () => {
  render(<App />);
  expect(true).toBe(true);
});

// Test 2: Verifica elementos únicos del periódico
test("renders unique newspaper elements", () => {
  render(<App />);

  // Buscar por texto del badge (único)
  const specialBadge = screen.getByText(/DEPLOY AUTOMÁTICO/i);
  expect(specialBadge).toBeInTheDocument();

  // Buscar por subtítulo (único)
  const subtitulo = screen.getByText(/Cine del pasado y del presente/i);
  expect(subtitulo).toBeInTheDocument();
});

// Test 3: Verifica navegación
test("renders navigation buttons", () => {
  render(<App />);

  const prevButton = screen.getByText(/Artículo Anterior/i);
  expect(prevButton).toBeInTheDocument();

  const nextButton = screen.getByText(/Siguiente Artículo/i);
  expect(nextButton).toBeInTheDocument();
});

// Test 4: Verifica título principal (permite duplicados)
test("has newspaper title", () => {
  render(<App />);

  const titleElements = screen.getAllByText(/NotiAventuras de Diana/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
