"use client";

import { useEffect, useRef, useState } from 'react';

interface VimeoPlayerOptions {
  id: number;
  width?: number;
  height?: number;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  background?: boolean;
  responsive?: boolean;
}

export const useVimeoPlayer = (options: VimeoPlayerOptions) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVimeoPlayer = async () => {
      if (!playerRef.current) return;

      try {
        // Dynamically import the Vimeo player
        const { default: Player } = await import('@vimeo/player');
        
        const player = new Player(playerRef.current, {
          id: options.id,
          width: options.width || 1920,
          height: options.height || 1080,
          autoplay: options.autoplay ?? true,
          muted: options.muted ?? true,
          loop: options.loop ?? true,
          controls: options.controls ?? false,
          background: options.background ?? true,
          responsive: options.responsive ?? true,
        });

        player.ready().then(() => {
          setIsLoaded(true);
        });

        player.on('error', (error) => {
          console.error('Vimeo player error:', error);
          setError('Failed to load video');
        });

      } catch (err) {
        console.error('Failed to load Vimeo player:', err);
        setError('Failed to load video player');
      }
    };

    loadVimeoPlayer();
  }, [options]);

  return { playerRef, isLoaded, error };
};
