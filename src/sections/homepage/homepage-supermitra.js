import { Card } from "@mui/material";
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
    return(
        <Card className='drop-shadow p-3 my-4'>
            <span className="font-bold ps-1 text-2xl">Exclusive Partner</span>
            {/* <div className="grid grid-flow-col gap-2 mt-2"> */}
            <Slider {...settings}>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
                <div  className="px-1">
                <StyledCard style={{ backgroundImage: `url(iconvilla.png)` }}></StyledCard>
                </div>
            </Slider>
            {/* </div> */}
        </Card>
    );
};
