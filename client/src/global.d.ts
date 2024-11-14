declare global {
    interface Window {
      YT: any; // Déclaration de YT
      onYouTubeIframeAPIReady: () => void; // Déclaration de la méthode onYouTubeIframeAPIReady
    }
  }
  
  export {};