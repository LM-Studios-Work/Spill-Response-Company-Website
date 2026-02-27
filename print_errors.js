const fs = require('fs');
const data = JSON.parse(fs.readFileSync('playwright-results.json', 'utf8'));
data.suites.forEach(suite => {
  suite.specs.forEach(spec => {
    if (!spec.ok) {
      console.log(`Failed Test: ${spec.title}`);
      spec.tests.forEach(test => {
        test.results.forEach(result => {
          if (result.status === 'failed' || result.status === 'timedOut') {
            result.errors.forEach(error => {
              console.log(error.message);
            });
          }
        });
      });
    }
  });
});
