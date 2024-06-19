import { useState } from 'react';
import { Card } from '@mui/material';
import Iconify from 'src/components/iconify';
import Rating from '@mui/material/Rating';
import ShopCard from './shop-card';

export default function HomepageRecomprod() {
    const [value, setValue] = useState(4);

    const [hover, setHover] = useState(-1);

    return (
        <div className='drop-shadow my-4'>
            <span className="font-bold text-2xl">Rekomendasi Product</span><br />
            <span>Lorem ipsum dolor sit amet</span>
            <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-3 min-[450px]:grid-cols-2 gap-3">
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>
                <ShopCard rating={4} location={'Bandung, Indonesia'} name={'Hotel Amarossa'} category={'Tour & Traveller'} price={'Rp 750.000'} discount={'Rp 750.000'}/>

            </div>
        </div>
    );
};
