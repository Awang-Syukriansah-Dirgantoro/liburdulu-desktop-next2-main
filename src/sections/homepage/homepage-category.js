import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';

import Slider from "react-slick";

export default function HomepageCategory() {
    var settings = {
        infinite: false,
        speed: 100,
        slidesToShow: 8.5,
        focusOnSelect: true,
        swipeToSlide: true,
    };
    return (
        <Card className='drop-shadow p-2 my-4'>
            {/* <div className='grid grid-flow-col justify-around'> */}
            <Slider {...settings}>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='grid grid-row flex justify-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1'>Villa</span>
                    </div>
                </div>
            </Slider>
            {/* </div> */}
        </Card>
        // <div className="w-full rounded-[20px] drop-shadow p-1">
        //     kocak
        // </div>
    );
};
