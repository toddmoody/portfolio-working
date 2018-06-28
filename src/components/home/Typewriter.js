import React, { Component } from 'react';
import Typed from 'react-typed';

class Typewriter extends Component {
    render() {
      return (
        <div>
            <Typed 
                strings={[
                    'code for the browser.', 
                    'interactive experiences.',
                    'intuative user interfaces.']} 
                typeSpeed={105}
                backSpeed={40} 
                loop />
        </div>


      );
    }
  }
  
  export default Typewriter;