import { motion } from 'framer'
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div 
        className = "motion-div"
        initial = {{
        }}
        whileTap={{
          x:-100,
        }}
      >

      </motion.div>
    </div>
  );
}

export default App;
