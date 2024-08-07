import { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { SlidesCarousel } from './SlidesCarousel'
import Autoplay from 'embla-carousel-autoplay'
import '../embla.css'

const TWEEN_FACTOR_BASE = 0.2

export const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: false, loop: true }, [Autoplay({delay: 3000})])
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `translateX(${translate}%)`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, tweenParallax])

  return (
    <div className="embla">
  <div className="embla__viewport" ref={emblaRef}>
    <div className="embla__container">
      <SlidesCarousel img='./tutoria1.jpg'/>
      <SlidesCarousel img='./tutoria2.jpg'/>
      <SlidesCarousel img='./tutoria3.jpg'/>
      <SlidesCarousel img='./tutoria4.jpg'/>
      <SlidesCarousel img='./tutoria5.jpg'/>
    </div>
  </div>
  <div className="embla__controls">
    <button className="embla__button embla__button--prev" onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
      <PrevButton />
    </button>
    <button className="embla__button embla__button--next" onClick={onNextButtonClick} disabled={nextBtnDisabled}>
      <NextButton />
    </button>
  </div>
  <div className="embla__dots">
    {scrollSnaps.map((_, index) => (
      <DotButton
        key={index}
        onClick={() => onDotButtonClick(index)}
        className={'embla__dot'.concat(
          index === selectedIndex ? ' embla__dot--selected' : ''
        )}
      />
    ))}
  </div>
</div>

  )
}
