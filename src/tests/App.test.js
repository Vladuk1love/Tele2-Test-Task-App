import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../components/App/App'

test('loads and displays greeting', async () => {
  render(<App/>)

  await userEvent.click(screen.getByRole('button').getByText('2'))


  expect(screen.getByRole('button').getByText('2')).toBeDisabled()
})

// export const testMyComponent = () => {
//   const { getByText } = render(<App />);
//   expect(screen.getByText('Yurtaev')).toBeInTheDocument();
// };