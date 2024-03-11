import { render } from '@testing-library/react';

import MySharedComponent from './my-shared-component';

describe('MySharedComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MySharedComponent />);
    expect(baseElement).toBeTruthy();
  });
});
