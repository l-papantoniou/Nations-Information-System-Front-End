# Nations-Information-System-Front-End

This is the frontend part of the Nations Information System, built with Angular. The application provides a user-friendly interface to view and interact with data about countries, their regions, languages spoken, and various statistics.

## Features

1. **Home Page**:
   - Redirects users to different sections of the application.
   - Menu items for navigation to different tasks.

2. **Country List**:
   - Fetches and displays the name, area, and country code (ISO2) of all countries in an ordered list.
   - Allows users to click on a country to view more details, including languages spoken in that country.

3. **Country Details**:
   - Displays all spoken languages in the selected country.

4. **Country Stats Table**:
   - Displays a table with columns: name, country code (ISO3), year, population, and GDP.
   - Shows the record with the maximum GDP per population ratio for each country.

5. **Country Stats Filter**:
   - Displays a table with columns: continent name, region name, country name, year, population, and GDP.
   - Allows users to filter results by region and date range.
   - Optional pagination of results for better user experience.

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/l-papantoniou/Nations-Information-System-Front-End.git
