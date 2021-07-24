import React from 'react'
import './App.css'
import { motion } from 'framer'
import { useViewportScroll, useTransform } from 'framer-motion'

function App() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 900], [500, -400]);
  const y2 = useTransform(scrollY, [0, 100], [0, -100]);

  return (
    <div className = "App">
      <motion.div className="motion-div" style={{ y: y1, x: -50, background: 'blue' }} />
      <motion.div
        className="motion-div"
        style={{ y: y2, x: 50, background: 'white' }}
      />
    </div>
  );
}

export default App

