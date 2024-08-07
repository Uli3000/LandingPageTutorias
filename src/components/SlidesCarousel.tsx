export const SlidesCarousel = ({img} : {img: string}) => {
    return (
        <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={img}
                    alt={img.split('./')[1]}
                  />
                </div>
              </div>
            </div>
    )
}