import { render } from '@testing-library/react';

import FeatureB from './feature-b';

describe('FeatureB', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureB />);
    expect(baseElement).toBeTruthy();
  });
});
