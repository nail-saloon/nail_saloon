import React, { useEffect, useState } from 'react';
import img1 from '../../../icons/imgs/RoundTop1.svg';
import img2 from '../../../icons/imgs/RoundTop2.svg';
import img3 from '../../../icons/imgs/RoundTop3.svg';
import img4 from '../../../icons/imgs/RoundTop4.svg';
import img5 from '../../../icons/imgs/RoundTop5.svg';
import img6 from '../../../icons/imgs/RoundTop6.svg';
import { Slider, SlideShow, SlideShowSlider, FrameImg } from './styles';


const Frame1 = (props) => {
  const [index, setIndex] = useState(0);
  const delay = 4500;
  const dataItem = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }, { img: img6 }];
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === dataItem?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index, dataItem.length]);


  return (
    <>
      <FrameImg props = {props}>
      <SlideShow>
          <SlideShowSlider index={index}>
            {dataItem?.map(({ img }, idx) => (
              <Slider key={idx}>
                <img src={img} alt="product" className="Frame-img" />
              </Slider>
            ))}
          </SlideShowSlider>
        </SlideShow>
      </FrameImg>
    </>
  )
}

export default Frame1