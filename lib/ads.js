export const showBannerAd = () => {
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error("Ad error:", e);
  }
}

export const showRewardedAd = () => {
  return new Promise((resolve) => {
    if (window.propeller) {
      window.propeller.showRewarded();
      window.propellerRewarded.onCompleted = resolve;
    } else {
      // Fallback for development
      setTimeout(resolve, 3000);
    }
  });
}
