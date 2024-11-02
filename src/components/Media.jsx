import { useState, useRef, useEffect } from "react";

export default function Media() {
  const [activeSlide, setActiveSlide] = useState("item1");
  const videoRefs = {
    item1: useRef(null),
    item2: useRef(null),
  };

  // Функция для переключения слайдов
  const handleCarouselClick = (e) => {
    e.preventDefault();
    setActiveSlide(e.target.getAttribute("href").slice(1));
  };

  // Функция для управления воспроизведением видео
  const toggleVideoPlay = () => {
    const activeVideoRef = videoRefs[activeSlide].current;
    if (activeVideoRef && activeVideoRef.paused) {
      activeVideoRef.play();
    } else if (activeVideoRef) {
      activeVideoRef.pause();
    }
  };

  return (
    <section className="w-full">
      <div className="carousel w-full">
        {/* Первый слайд */}
        <div
          id="item1"
          className={`carousel-item w-full ${activeSlide === "item1" ? "" : "hidden"}`}
        >
          <video
            ref={videoRefs.item1}
            poster="/images/video-1.webp"
            playsInline
            onClick={toggleVideoPlay}
          >
            <source
              src="/media/2_full.webm"
              type='video/webm; codecs="vp8, vorbis"'
            />
            <source
              src="/media/2_full.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            <source
              src="/media/2_full.ogv"
              type='video/ogg; codecs="theora, vorbis"'
            />
          </video>
        </div>

        {/* Второй слайд */}
        <div
          id="item2"
          className={`carousel-item w-full ${activeSlide === "item2" ? "" : "hidden"}`}
        >
          <video
            ref={videoRefs.item2}
            poster="/images/video-2.webp"
            playsInline
            onClick={toggleVideoPlay}
          >
            <source
              src="/media/1_full.webm"
              type='video/webm; codecs="vp8, vorbis"'
            />
            <source
              src="/media/1_full.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            <source
              src="/media/1_full.ogv"
              type='video/ogg; codecs="theora, vorbis"'
            />
          </video>
        </div>
      </div>

      {/* Навигация по слайдам */}
      <div className="flex w-full justify-center gap-2 py-2">
        <a
          href="#item1"
          className="btn btn-outline btn-sm"
          onClick={handleCarouselClick}
        >
          1
        </a>
        <a
          href="#item2"
          className="btn btn-outline btn-sm"
          onClick={handleCarouselClick}
        >
          2
        </a>
      </div>
    </section>
  );
}
