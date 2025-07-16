export default function AdModal({ onComplete }) {
  useEffect(() => {
    // PropellerAds Rewarded
    window.propellerRewarded = {
      onReady: () => window.propeller.showRewarded(),
      onCompleted: () => {
        console.log('Ad completed - granting reward');
        onComplete();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-sm">
        <h3 className="text-xl font-bold mb-4">Watch Ad to Continue</h3>
        <div id="propeller-rewarded"></div>
        <button 
          onClick={onComplete}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Skip (Dev Mode)
        </button>
      </div>
    </div>
  )
}
