import { useState } from 'react';
import { Card } from '@mui/material';
import Iconify from 'src/components/iconify';
import Rating from '@mui/material/Rating';

export default function ShopCard({rating, location, name, category, price, discount}) {
    const [value, setValue] = useState(rating);
    return (
        <Card className='p-2 rounded-[20px] h-[400px]'>
            <Card className='rounded-[12px]'>
                <img src="iconvilla.png" alt="" className='bg-liburdulu-blue h-[195px] object-contain' />
            </Card>
            <div className="flex flex-col justify-between h-2/4 pt-2">
                <div className="grid grid-flow-row p-1">
                    <div className="flex justify-between">
                        <span className="text-liburdulu-blue text-[12px] font-[400] flex items-center">
                            <img src="libur_dulu_logo_only_Converted.png" alt="Libur Dulu Logo" className="h-[21px] object-contain mr-1" />
                            {location}
                        </span>
                        <Rating
                            icon={<Iconify icon="line-md:star-filled" sx={{ fontSize: 13 }} />}
                            emptyIcon={<Iconify icon="line-md:star-twotone" sx={{ fontSize: 13 }} />}
                            name="read-only"
                            value={value}
                            readOnly
                        />
                    </div>
                    <div className="flex justify-between px-1">
                        <span className="text-[17px] font-[500]">{name}</span>
                    </div>
                    <div className="px-1">
                        <span className="text-liburdulu-blue text-[12px] font-[400]">{category}</span>
                    </div>
                </div>
                <div className="grid grid-flow-row p-1 items-end">
                    <div className="relative px-1 flex items-end">
                        <span className="text-gray-400 text-[13px] font-[400] line-through">{price}</span>
                    </div>
                    <div className="relative px-1 flex items-end">
                        <span className="text-liburdulu-orange text-[16px] font-[600]">{discount}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};
