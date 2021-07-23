import React from 'react'
import './App.css'
import { motion, useMotionValue, useTransform} from 'framer'
function App() {
  
  const x = useMotionValue(0)
  const scale = useTransform ( x, [-150, 150], [0.5, 1.5] )
  const rotate = useTransform ( x, [-150, 150], [-90, 90])
  return (
    <div className = "App">
      <motion.div
        className = "motion-div"
        style = {{
          x: x,
          rotate: rotate,
          scale: scale,
          cursor: 'grab'
        }}
        drag = 'x'
        dragConstraints = {{left: 0, right: 0}}
        dragTransition = {{
          dragStiffness: 600,
          dragDamping: 20
        }}
        whileTap = {{ cursor: 'grabbing' }}
      >
      </motion.div>
    </div>
  )
}

export default App

