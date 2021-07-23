import { motion } from 'framer'
import './App.css';

function App() {   
  return (
    <div className="App">
      <motion.div 
        className = "motion-div"
        initial = {{scale: 1}}
        whileHover = {{scale: 1.1}}
        whileDrag = {{scale: .9}}
        drag
        dragConstraints = {{
          top: -200,
          right: 200,
          bottom: 200,
          left: -200
        }}
        dragTransition = {{ bounceStiffness: 500, bounceDamping: 20}}
        dragElastic = {.6}
        whileTap = {{ cursor: "grabbing"}}
        >
      </motion.div>
      <div className="container"></div>
    </div>
  );
}

export default App;
