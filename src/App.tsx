
import { useState } from 'react';
import './App.css'
import ShortyBar from './components/ShortyBar'
import Stats from './components/Stats'
import { LinkStats } from './types/types';

function App() {
  const [stats, setStats] = useState<LinkStats | null>(null);
  const [error, setError] = useState<string | null>(null); // Estado para el mensaje de error

  const handleFetchStats = async (link: string) => {
    try {
      setError(null);
      console.log(link+'/stats');
      const res = await fetch(link + "/stats");

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "Failed to fetch stats");
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      setStats(() => ({
        original_url: data.result.original_url,
        short_id: data.result.short_id,
        access_count: data.result.access_count,
        created_at: data.result.created_at,
      }));
    } catch (error) {
      console.error('Failed to obtain URL stats:', error);
    }

  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen    '>
      <ShortyBar handleFetchStats={handleFetchStats}></ShortyBar>
      <Stats stats={stats} error={error} handleFetchStats={handleFetchStats}></Stats>
    </div>
      
  )
}

export default App
