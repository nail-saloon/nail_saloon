import React, { useEffect, useState } from 'react';
import img1 from '../../../icons/imgs/img1.png';
import img2 from '../../../icons/imgs/img2.png';
import img3 from '../../../icons/imgs/img3.png';
import Button from '../../atoms/Button';
import BookAppointment from '../appointment/index';
import Modal from '../modal';
import { SlideDots, Slider, SlideShow, SlideShowSlider } from './styles';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const delay = 4500;
  const dataItem = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const [show, setShow] = useState(false);
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
      <SlideShow>
        <div className="slide-text">
          <p>
            Lorem Ipsum <br /> Dolor Sit Amet.
          </p>
          <Button bg text={'Book Appointment'} onClick={() => setShow(true)} />
        </div>
        <SlideShowSlider index={index}>
          {dataItem?.map(({ img }, idx) => (
            <Slider key={idx}>
              <img src={img} alt="product" className="carousel-img" />
            </Slider>
          ))}
        </SlideShowSlider>
      </SlideShow>
      <Modal show={show}>
        <BookAppointment onClose={() => setShow(false)} />
      </Modal>
      <SlideDots>
        {dataItem?.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
          ></div>
        ))}
      </SlideDots>
    </>
  );
};

export default Carousel;
