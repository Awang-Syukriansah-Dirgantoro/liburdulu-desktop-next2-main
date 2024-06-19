import { Avatar, Card } from "@mui/material";
import { styled } from '@mui/system';

import Slider from "react-slick";

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: overlay for better text readability
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
}));

export default function HomepageSupermitra() {
  var settings = {
    className: 'mt-2',
    infinite: false,
    speed: 100,
    slidesToShow: 4.2,
    focusOnSelect: true,
    swipeToSlide: true,
  };
  return (
    <Card className='drop-shadow p-3 my-4'>
      <span className="font-bold ps-1 text-2xl">Exclusive Partner</span>
      {/* <div className="grid grid-flow-col gap-2 mt-2"> */}
      <Slider {...settings}>
        <div className="px-1">
          <StyledCard style={{ backgroundImage: `url(bg-opentrip.jpeg)` }}>
            <div className="flex flex-col h-full w-full p-3">
              <div className="rounded-[5px] w-fit p-1 px-2 bg-liburdulu-orange">
                <span className="font-[600]">Tour</span>
              </div>
              <span className="font-[600]">By Jalan Dulu Aja</span>
              <img src="icon-opentrip.png" className="absolute bottom-0 left-0 m-3 h-[80px] object-contain items-end"/>
              <img src="SpecialMitraIcon.png" className="absolute top-0 right-0 m-1 mt-2 h-[80px] object-contain"/>
            </div>
          </StyledCard>
        </div>
        <div className="px-1">
          <StyledCard style={{ backgroundImage: `url(bg-campervan.jpeg)` }}>
          <div className="flex flex-col h-full w-full p-3">
              <div className="rounded-[5px] w-fit p-1 px-2 bg-liburdulu-orange">
                <span className="font-[600]">Campcation</span>
              </div>
              <span className="font-[600]">By Rental Campervan Indonesia</span>
              <img src="icon-campervan.png" className="absolute bottom-0 left-0 m-3 h-[80px] object-contain items-end"/>
              <img src="SpecialMitraIcon.png" className="absolute top-0 right-0 m-1 mt-2 h-[80px] object-contain"/>
            </div>
          </StyledCard>
        </div>
        <div className="px-1">
          <StyledCard style={{ backgroundImage: `url(bg-hotel.jpeg)` }}>
          <div className="flex flex-col h-full w-full p-3">
              <div className="rounded-[5px] w-fit p-1 px-2 bg-liburdulu-orange">
                <span className="font-[600]">Hotel & Convention</span>
              </div>
              <span className="font-[600]">By My Hospitality Managemnet</span>
              <img src="icon-hotel.png" className="absolute bottom-0 left-0 m-3 h-[80px] object-contain items-end"/>
              <img src="SpecialMitraIcon.png" className="absolute top-0 right-0 m-1 mt-2 h-[80px] object-contain"/>
            </div>
          </StyledCard>
        </div>
        <div className="px-1">
          <StyledCard style={{ backgroundImage: `url(bg-hitraveler.png)` }}>
          <div className="flex flex-col h-full w-full p-3">
              <div className="rounded-[5px] w-fit p-1 px-2 bg-liburdulu-orange">
                <span className="font-[600]">Tour & Travel</span>
              </div>
              <span className="font-[600]">By Hai Traveller</span>
              <img src="icon-hitraveler.png" className="absolute bottom-0 left-0 m-3 h-[70px] object-contain items-end"/>
              <img src="SpecialMitraIcon.png" className="absolute top-0 right-0 m-1 mt-2 h-[80px] object-contain"/>
            </div>
          </StyledCard>
        </div>
        <div className="px-1">
          <StyledCard style={{ backgroundImage: `url(bg-attraction.jpeg)` }}>
          <div className="flex flex-col h-full w-full p-3">
              <div className="rounded-[5px] w-fit p-1 px-2 bg-liburdulu-orange">
                <span className="font-[600]">Attraction</span>
              </div>
              <span className="font-[600]">By Penidago.Com</span>
              <img src="icon-attraction.png" className="absolute bottom-0 left-0 m-3 h-[60px] object-contain items-end"/>
              <img src="SpecialMitraIcon.png" className="absolute top-0 right-0 m-1 mt-2 h-[80px] object-contain"/>
            </div>
          </StyledCard>
        </div>
      </Slider>
      {/* </div> */}
    </Card>
  );
};
