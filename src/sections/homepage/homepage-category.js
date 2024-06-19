import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';

import Slider from "react-slick";

export default function HomepageCategory() {
    var settings = {
        infinite: false,
        speed: 100,
        slidesToShow: 9.5,
        focusOnSelect: true,
        swipeToSlide: true,
    };
    return (
        <Card className='drop-shadow p-2 my-4'>
            {/* <div className='grid grid-flow-col justify-around'> */}
            <Slider {...settings} className='py-[15px]'>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconhotel-convention.png' className='h-[60] object-contain' />
                        </Avatar>
                        
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Hotel & Convention</span>
                        
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Villa</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='icontour.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Tour & Travel</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconobject-wisata.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Object Wisata</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='icontransportasi.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Transportasi</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconrelaksasi.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Relaksasi</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconkuliner.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Kuliner</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Event</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconvilla.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Funcation</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconcampcation.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Campcation</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <Avatar sx={{
                            height: 60,
                            width: 60,
                            bgcolor: 'rgba(29, 156, 171, 0.2)'
                        }}>
                            <img src='iconcampcation.png' className='h-[60] object-contain' />
                        </Avatar>
                        <span className='font-medium text-xs pt-1 line-clamp-2 px-10'>Wisata Religi</span>
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
