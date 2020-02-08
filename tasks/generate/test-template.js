function tTemplate (componentName) {
  return `import React from 'react';
import { render } from '@testing-library/react';
import ${componentName} from './${componentName}';

test('renders ${componentName}', () => {
  const { getByText } = render(<${componentName} />);
});`
}

module.exports = tTemplate;