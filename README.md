# CloudJam DAW Testing

## Description
This project contains automated end-to-end tests for the CloudJam Digital Audio Workstation (DAW) application using Cypress with Cucumber integration. It follows the Page Object Model pattern for better maintainability and reusability.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Chrome/Firefox/Edge browser

## Features Tested
- Track Management (creation, deletion)
- Audio Clip Management (import, deletion)
- Mute Button Functionality
- Export Functionality
- Debug Panel Features
- Transport Controls

## Installation
```bash
# Clone the repository
git clone <repository-url>
cd dawn-testing

# Install dependencies
npm install
```

## Project Structure
```
cypress/
├── e2e/
│   ├── features/           # Cucumber feature files
│   ├── step_definitions/   # Step definition files
│   ├── page_objects/      # Page Object Model files
│   ├── constants/         # Test data and selectors
│   └── utils/             # Utility functions
├── support/               # Support files
└── downloads/            # Downloaded files during tests
Sound Files/              # Test audio files for DAW testing
└── Audio1-8.mp3         # Sample audio files for import testing
```

## Running Tests

### Development Mode (with UI)
```bash
npm run cypress:open
```

### Headless Mode
```bash
npm run cypress:run
```

### Generate Reports
```bash
npm run report:all
```

## Available Scripts
- `cypress:open`: Opens Cypress Test Runner
- `cypress:run`: Runs tests in headless mode
- `test`: Alias for cypress:run
- `test:report`: Runs tests with Mochawesome reporter
- `report:merge`: Merges multiple report files
- `report:generate`: Generates HTML report
- `report:all`: Runs tests and generates complete report

## Test Features
1. **Home Page Tests**
   - Welcome screen verification
   - Navigation to DAW interface
   - Track addition functionality
   - Debug panel verification

2. **Track Management**
   - Adding new tracks
   - Deleting tracks
   - Multiple track operations

3. **Audio Clip Management**
   - Importing audio files from Sound Files directory
   - Testing with various audio formats (MP3)
   - Clip deletion
   - Waveform visualization verification
   - Audio playback testing

4. **Sound Files Usage**
   - The Sound Files directory contains various audio samples (Audio1.mp3 to Audio8.mp3)
   - These files are used for testing audio import functionality
   - Files can be used to test:
     - Single and multiple file imports
     - Audio playback quality
     - Waveform rendering
     - Track manipulation features
     - Export functionality verification

5. **Mute Button Functionality**
   - Muting/unmuting tracks
   - Visual feedback verification
   - Multiple track muting

6. **Export Functionality**
   - WAV file export
   - Project saving

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the ISC License.