import { useState } from "react"
import ArrowRight from "../../../assets/images/arrow-right.svg"
import ArrowLeft from "../../../assets/images/arrow-left.svg"
import "./style.scss"

export default function Slider({ datas }) {

    const [slider, updateSlider] = useState(0)

    const title = datas.title
    const pictures = datas.pictures

    const nextPicture = () => {
        updateSlider(slider + 1)
        if (slider === pictures.length - 1)
            updateSlider(0)
    }

    const prevPicture = () => {
        updateSlider(slider - 1)
        if (slider === 0)
            updateSlider(pictures.length - 1)
    }

    return (
        <div className="slider">
            <img className="slider__img" src={pictures[slider]} alt={title} />
            {pictures.length > 1 &&
                <>
                    <div className="slider__arrow">
                        <img
                            className='slider__arrow--hover'
                            src={ArrowLeft}
                            alt="Flèche vers la gauche"
                            onClick={prevPicture}
                        />
                        <img
                            className='slider__arrow--hover'
                            src={ArrowRight}
                            alt="Flèche vers la droite"
                            onClick={nextPicture}
                        />
                    </div>
                    <p className='slider__count'>{slider + 1}/{pictures.length}</p>
                </>
            }
        </div>
    )
}