import { motion, useAnimation } from 'framer'
import './App.css';

function App() {
  const animation = useAnimation();

  async function sequence() {
    await animation.start({ rotate: 90 })
    await animation.start({ scale: 1.5 })
    await animation.start({ rotate: -0 })
    animation.start ({ scale: 1 })    
  }
  return (
    <div className="App">
      <motion.div 
        className = "motion-div"
        animate = { animation }
        onTap = { sequence }
        >
      </motion.div>
    </div>
  );
}

export default App;
