import '@testing-library/jest-dom/extend-expect'

import {render, fireEvent} from '@testing-library/svelte'

import Topbar from '../Topbar.svelte'

test('shows proper heading when rendered', () => {
  const {getByText} = render(Topbar, {props: {whiteTheme: false}})
  expect(getByText('课程')).toBeInTheDocument()
  expect(getByText('课程')).toMatchSnapshot()
})
