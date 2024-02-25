import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '../app/page'

test('Home', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))
  expect(main.findByText('Hello World', { selector: 'h1' })).toBeDefined()
})
