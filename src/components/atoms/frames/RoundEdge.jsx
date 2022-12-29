import React, { useEffect, useState } from 'react';
import img1 from '../../../icons/imgs/RoundEdge1.svg';
import img2 from '../../../icons/imgs/RoundEdge2.svg';
import img3 from '../../../icons/imgs/RoundEdge3.svg';
import img4 from '../../../icons/imgs/RoundEdge4.svg';
import { Slider, SlideShow, SlideShowSlider, FrameImg } from './styles';

const Frame = () => {
  const [index, setIndex] = useState(0);
  const delay = 4500;
  const dataItem = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
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
      <FrameImg>
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
  );
};

export default Frame;
