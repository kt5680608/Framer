import React from 'react';
import { motion, Page, transform} from 'framer'
import './App.css';

function App() {
  const pages = [ 1, 2, 3, 4, 5]
  return (
    <div className="App">
      <Page
        className = "container"
        contentOffsetX = {10}
        width = { 300 }
        height = { 500 }
        radius = { 50 }
        center
        gap = { 0 }
        effect = { (info) => {
          const offset = info.normalizedOffset
          const opacity = transform(offset, [ -1, 0, 1 ], [0.2, 1, 0.2])
          const scale = transform(offset, [-1, 0, 1 ], [0.3, 1, 0.3])
          
          return { opacity, scale }
        }}
      >
        {pages.map((index) => {
          return (
            <div className = "cards"
              center
              style = {{
                width: 300,
                height: 500,
                borderRadius: 50,
                backgroundColor: "#fff",
              }}
            >
            </div>
          )
        })}
      </Page>
    </div>
  );
}

export default App;
