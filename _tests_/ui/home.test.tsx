import { test, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '@/app/(website)/(pages)/(home)/page';

describe('unit test UI', () => {
  test('example', () => {
    render(<Page />);
    expect(screen.getByRole('heading')).toHaveTextContent('heading');
  });
});
