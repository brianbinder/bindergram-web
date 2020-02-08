function cTemplate (componentName) {
  return `import React from 'react';
import './${componentName}.css';

function ${componentName}() {
  return (
    {/* **Insert component script** */}
  )
}

export default ${componentName}`
}

module.exports = cTemplate;