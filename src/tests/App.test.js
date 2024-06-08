import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../components/App/App'
import ProductList from "../components/ProductList/ProductList";
import ProductPagination from "../components/ProductPagination/ProductPagination";

// Тестовый тест )
test('render my text input', () => {
  render(<App/>)
  const searchButton = screen.getByText('Найти');
  expect(searchButton).toBeInTheDocument();
})

test('Have input value when user type it in', async () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Поиск');
  await userEvent.type(searchInput, 'Lipstick');
  expect(searchInput).toHaveValue('Lipstick');
});


// Рендер(фильтр) продукта при вводе значений и нажатии на enter
test('Renders filtered products when search input is changed and Enter is clicked', async () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Поиск');
  await userEvent.type(searchInput, 'Lipstick');
  fireEvent.keyDown(searchInput, {key: 'Enter', code: 'Enter', charCode: 13})
  await waitFor(() => {
    const filteredProductElement = screen.getByText('Red Lipstick');
    expect(filteredProductElement).toBeInTheDocument();
  });
});

// Рендер(фильтр) продукта при вводе значений и нажатии на "Найти"
test('Renders filtered products when search input is changed and Search-Button is clicked', async () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Поиск');
  await userEvent.type(searchInput, 'Lipstick');
  fireEvent.click(screen.getByText(/Найти/i))
  await waitFor(() => {
    const filteredProductElement = screen.getByText('Red Lipstick');
    expect(filteredProductElement).toBeInTheDocument();
  });
});

test('ProductList component renders correctly', () => {
  render(<ProductList products={[]} lastProductIndex={0} firstProductIndex={0} />);
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
})


// MockData tests. Correct render of ProductList component
test('ProductList component renders products', () => {
  const mockProducts = [
    { id: 1, title: 'Product 1', images: [''], price: ''},
    { id: 2, title: 'Product 2', images: [''], price: '' },
  ];
  render(<ProductList products={mockProducts} lastProductIndex={2} firstProductIndex={0} />);
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});

test('ProductPagination component renders pagination buttons currectly', () => {
  const mockTotalProducts = 10;
  const mockProductsPerPage = 2;
  const mockCurrPage = 3;
  render(<ProductPagination totalProducts={mockTotalProducts} productsPerPage={mockProductsPerPage} onClick={() => {}} currPage={mockCurrPage} />);
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
  expect(screen.getByText('5')).toBeInTheDocument();
});


// Ввел данные -> Рендер фильтрованных данных -> Клик по "Отчистить" -> Рендер изначальных данных
// test('Renders products changed when Clear-Button is clicked', async () => {
//   render(<App />);
//   const searchInput = screen.getByPlaceholderText('Поиск');
//   const searchButton = screen.getByText('Найти');
//   await userEvent.type(searchInput, 'Lipstick');
//   fireEvent.keyDown(searchButton)
//   await waitFor(() => {
//     const filteredProductElement = screen.getByText('Red Lipstick');
//     const notFilteredProductElement = screen.getByText('Calvin Klein CK One');
//     expect(notFilteredProductElement).not.toBeInTheDocument();
//   });
// });


test('Click on Product', () => {
  render(<App />);
  userEvent.click(screen.getByText("Essence Mascara Lash Princess"))
  expect(screen.getByText("Ships in 1 month")).toBeInTheDocument()
})