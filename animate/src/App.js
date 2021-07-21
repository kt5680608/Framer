import { motion } from 'framer'
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div 
        className = "motion-div"
        initial = {{
          opacity: 0
        }}
        animate = {{
          opacity: 1,
          transition: {
            duration: 1
          }
        }}>
      </motion.div>
    </div>
  );
}

export default App;
