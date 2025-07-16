import { useState } from 'react'
import AdBanner from '../components/AdBanner'
import AdModal from '../components/AdModal'
import GameBoard from '../components/GameBoard'

export default function Home() {
  const [showAd, setShowAd] = useState(false)
  const [adType, setAdType] = useState('start')

  const handleAdComplete = () => {
    setShowAd(false)
    if (adType === 'reward') {
      // Grant 100 points
    }
  }

  return (
    <div className="container mx-auto px-4">
      <AdBanner position="top" />
      
      {showAd && <AdModal onComplete={handleAdComplete} />}
      
      <GameBoard 
        onGameStart={() => {
          setAdType('start')
          setShowAd(true)
        }}
        onLevelWin={() => {
          setAdType('reward')
          setShowAd(true)
        }}
      />
      
      <AdBanner position="bottom" />
    </div>
  )
            }
