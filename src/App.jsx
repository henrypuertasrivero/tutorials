import { useState } from 'react'
import Layout from '../components/layouts/Layout'
import SeeTutorial from '../components/subpage/SeeTutorial';

function App() {
  const [count, setCount] = useState(0)
  const [statePage, setStatePage] = useState('');
  return (
    <Layout>
      {
        statePage === 'SeeTutorial' ? 
          <SeeTutorial/>
          :null
      }

      {
        statePage === '' ? 
          <button
            style={{ fontSize: 16, padding: 10, borderRadius: 20, color:'#eaeef2' }}
            onClick={() => setStatePage('SeeTutorial')}
          >
            Tutorial de como ver con los ojos
          </button>
          :null
      }
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <button
          style={{ fontSize: 16, padding: 10, borderRadius: 20, color:'#eaeef2' }}
          onClick={() => setStatePage('')}
        >
          Salir del Tutorial
        </button>
      </div>
      
    </Layout>
  )
}

export default App
