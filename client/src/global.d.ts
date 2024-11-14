declare global {
  interface Window {
    YT: typeof YT; // Déclaration de YT
    onYouTubeIframeAPIReady: () => void; // Déclaration de la méthode onYouTubeIframeAPIReady
  }
}

export {};
