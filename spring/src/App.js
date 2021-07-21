import { motion } from 'framer'
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div 
        className = "motion-div"
        initial = {{
          scale: 0
        }}
        animate = {{
          scale: 1,
        }}>
      </motion.div>

      <motion.div 
        className = "motion-div"
        initial = {{
          scale: 0
        }}
        animate = {{
          scale: 1,
          transition: {
            type: 'spring', 
            stiffness: 600,
            mass: 2
          }
        }}>
      </motion.div>
    </div>
  );
}

export default App;
