export default function AdBanner({ position }) {
  return (
    <div className={`w-full ${position === 'top' ? 'mb-4' : 'mt-4'}`}>
      <ins className="adsbygoogle"
        style={{display:'block'}}
        data-ad-client="ca-pub-YOUR_ADSENSE_ID"
        data-ad-slot={position === 'top' ? 'TOP_SLOT_ID' : 'BOTTOM_SLOT_ID'}
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  )
}
