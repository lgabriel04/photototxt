// Connects the CSS file for the app
import './App.css';

// Imports the Select component from the select.js file
import Select from './select.js';

// Imports the ImageDisplay component from the display.js file
import ImageDisplay from './display.js';

// Imports the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Imports the FontAwesome icons for image, envelope, and phone
import { faImage, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// Defines the Footer component
function Footer() {
  return (
    // Footer tag with class name 'footer'
    <footer className='footer'>
      {/* // Text that says who made the app and the year it was made
      Made by: Lance Gabriel Alcantara  © 2023
      // HTML break */}
      <br />
      {/* // Text that says 'Contact info:'
      Contact info: 
      // Email link with a mailto attribute */}
      <a href='mailto:llalcantara@addu.edu.ph'>
        {/* // Icon and email address */}
        <FontAwesomeIcon icon={faEnvelope} /> llalcantara@addu.edu.ph
      </a>
      {/* // A space */}
      {' '}
      {/* // Phone link with a tel attribute */}
      <a href='tel:+639665741887'>
        {/* // Icon and phone number */}
        <FontAwesomeIcon icon={faPhone} /> 09665741887
      </a>
    </footer>
  );
}

// Defines the App component
function App() {
  return (
    // Div tag with class name 'App'
    <div className="App">
      {/* // H1 tag with class name 'naknam' */}
      <h1 className='naknam'>
        {/* // Icon and app name */}
        <FontAwesomeIcon icon={faImage} />ImgTxt
      </h1>
      {/* // Text that says what the app does */}
      <p className='naknam'> Covert an image into text form </p>
      {/* // Select component */}
      <Select />
      {/* // ImageDisplay component */}
      <ImageDisplay />
      {/* // Footer component */}
      <Footer />
    </div>
  );
}

// Exports the App component as the default export of this module (file)
export default App;
