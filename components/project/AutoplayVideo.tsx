"use client";

import { useEffect, useRef } from "react";

export interface AutoplayVideoProps {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}

/**
 * 재생 제어만 담당하는 최소 클라이언트 경계.
 * autoplay 속성은 마크업에 그대로 남겨 JS 없이도 재생되게 하고,
 * prefers-reduced-motion: reduce 일 때만 여기서 멈춘다.
 */
export default function AutoplayVideo({
  src,
  poster,
  label,
  className,
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (query.matches) {
        /*
         * autoplay 속성을 먼저 걷어내야 load() 가 재생을 다시 시작하지 않는다.
         * load() 는 요소를 초기 상태로 되돌려 poster 를 다시 보여준다 —
         * pause() 만으로는 이미 재생된 프레임에서 멈춘다.
         */
        video.removeAttribute("autoplay");
        video.pause();
        video.load();
        return;
      }

      video.setAttribute("autoplay", "");
      /* 자동재생이 거부될 수 있으므로 실패는 조용히 넘긴다 */
      void video.play().catch(() => {});
    };

    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    /*
     * muted 없이는 브라우저가 autoplay 를 막고, playsInline 없이는
     * iOS 가 전체화면으로 띄운다. 셋은 세트로 붙어야 한다.
     */
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={label}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
