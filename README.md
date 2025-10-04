# Etch-a-Sketch

## Description
Etch-a-Sketch is a web-based drawing application that creates a grid of squares where users can hover their mouse to "draw" by changing the squares' colors. Built with HTML, CSS (using Flexbox), and JavaScript, this project allows users to create a pixelated trail and dynamically resize the grid. The project is part of a learning exercise to practice DOM manipulation, event listeners, and Flexbox for layout.

## Features
- **Initial Grid**: A 16x16 grid (256 squares) is displayed on page load, where hovering over a square changes its background to a random RGB color.
- **Dynamic Grid Resizing**: A button prompts the user to enter a new grid size (1–100 squares per side), generating a new grid within a fixed 960px width.
- **Hover Effect**: Mouseover events on squares create a pixelated drawing effect with random RGB colors.
- **Extra Credit**:
  - Random RGB colors for each square on hover (implemented).
  - Progressive darkening effect, increasing opacity by 10% per hover until fully opaque (planned).

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Whytebread/etch-a-sketch.git
   ```
2. Navigate to the project directory:
   ```bash
   cd etch-a-sketch
   ```
3. Open `index.html` in a web browser to view the application.

## Usage
- On page load, a 16x16 grid appears.
- Hover over squares to change their color to a random RGB value, creating a colorful drawing effect.
- Click the "Change Grid Size" button to enter a new grid size (max 100 squares per side).
- Enter a number in the prompt, and a new grid will be generated with the specified dimensions, maintaining a total width of 960px.
- Use browser developer tools (F12) to debug any issues with the grid or hover effects.

## Project Structure
- `index.html`: The main HTML file containing the grid container and button.
- `main.css`: Styles for the grid layout using Flexbox and square styling.
- `main.js`: JavaScript for creating the grid, handling hover effects with random RGB colors, and resizing the grid based on user input.

## Development Notes
- The grid is created dynamically using JavaScript to append `div` elements to a container.
- Flexbox is used for layout to ensure squares wrap into a grid without using CSS Grid.
- Borders are managed with `box-sizing: border-box` to prevent size miscalculations.
- Event listeners handle mouseover events for the random color effect and button clicks for grid resizing.
- Input validation ensures the grid size is between 1 and 100 to prevent performance issues.
- Random RGB colors are generated using `Math.random()` for each hover event.

## Future Improvements
- Implement the progressive darkening effect using the CSS `opacity` property.
- Enhance input validation with better user feedback for invalid entries.
- Add a reset button to clear the grid without changing its size.

