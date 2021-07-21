import { motion } from 'framer'
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div 
        className = "motion-div"
        animate = {{
          rotate: 360,
          transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2
          }
        }}>
      </motion.div>
    </div>
  );
}

export default App;
