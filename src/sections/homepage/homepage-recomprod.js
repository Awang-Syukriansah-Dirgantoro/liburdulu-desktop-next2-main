import { useState } from 'react';
import { Card } from '@mui/material';
import Iconify from 'src/components/iconify';
import Rating from '@mui/material/Rating';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const customIcons = {
    1: {
        icon: <Iconify icon="ic:round-sentiment-very-dissatisfied" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <Iconify icon="ic:round-sentiment-dissatisfied" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <Iconify icon="ic:round-sentiment-neutral" />,
        label: 'Neutral',
    },
    4: {
        icon: <Iconify icon="ic:round-sentiment-satisfied" />,
        label: 'Satisfied',
    },
    5: {
        icon: <Iconify icon="ic:round-sentiment-very-satisfied" />,
        label: 'Very Satisfied',
    },
};

export default function HomepageRecomprod() {
    const [value, setValue] = useState(2);

    const [hover, setHover] = useState(-1);

    return (
        <div className='drop-shadow p-3 my-4'>
            <span className="font-bold text-2xl">Rekomendasi Product</span><br />
            <span>Lorem ipsum dolor sit amet</span>
            <div className="grid grid-cols-4">
                <Card className='p-2 rounded-[20px]'>
                    <Card className='rounded-[12px]'>
                        <img src="iconvilla.png" alt="" className='bg-liburdulu-blue' />
                    </Card>
                    <div className='flex justify-between p-1'>
                    Ini Product
                    <Rating name="read-only" value={value} readOnly />
                    </div>
                </Card>
            </div>
        </div>
    );
};
