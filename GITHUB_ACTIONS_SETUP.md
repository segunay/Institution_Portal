# GitHub Actions Setup for Multi-Browser Testing

This project is configured to run Cypress tests on multiple browsers (Chrome, Firefox, and Safari) and send email reports after each test run.

## Workflow Features

- **Multi-browser testing**: Runs tests on Chrome, Firefox, and Safari
- **Parallel execution**: Tests run simultaneously on different browsers
- **Artifact collection**: Screenshots and videos are saved for failed tests
- **HTML reporting**: Generates comprehensive test reports using Mochawesome
- **Email notifications**: Sends test results via email after each run

## Required GitHub Secrets

To enable email reporting, you need to set up the following secrets in your GitHub repository:

### 1. Go to your GitHub repository
- Navigate to Settings → Secrets and variables → Actions
- Click "New repository secret"

### 2. Add the following secrets:

#### `EMAIL_USERNAME`
- Your Gmail address (e.g., `your-email@gmail.com`)
- Used as the sender email address

#### `EMAIL_PASSWORD`
- Your Gmail app password (NOT your regular Gmail password)
- To generate an app password:
  1. Go to your Google Account settings
  2. Navigate to Security → 2-Step Verification
  3. Generate an App Password for "Mail"
  4. Use this generated password

#### `EMAIL_TO`
- The email address where you want to receive test reports
- Can be the same as `EMAIL_USERNAME` or a different address

## Alternative Email Providers

If you're not using Gmail, you can modify the workflow file to use other SMTP providers:

### For Outlook/Hotmail:
```yaml
server_address: smtp-mail.outlook.com
server_port: 587
```

### For Yahoo:
```yaml
server_address: smtp.mail.yahoo.com
server_port: 587
```

### For Custom SMTP:
```yaml
server_address: your-smtp-server.com
server_port: 587
```

## Workflow Jobs

1. **cypress-chrome**: Runs tests on Chrome browser
2. **cypress-firefox**: Runs tests on Firefox browser  
3. **cypress-safari**: Runs tests on Safari browser (requires macOS runner)
4. **generate-report**: Combines test results and generates HTML report
5. **send-email-report**: Sends the report via email

## Test Results

- **Screenshots**: Automatically captured on test failures
- **Videos**: Recorded for all test runs
- **HTML Report**: Comprehensive report with test results, timing, and statistics
- **Email**: Contains test summary and link to full report

## Troubleshooting

### Email not sending
- Verify all secrets are correctly set
- Check that your Gmail account has 2FA enabled and app password is generated
- Ensure the email addresses are valid

### Tests failing on Safari
- Safari tests run on macOS runners which may have different behavior
- Check for WebKit-specific issues in your tests

### Report generation issues
- Ensure mochawesome dependencies are installed
- Check that test results are being generated in the correct format 