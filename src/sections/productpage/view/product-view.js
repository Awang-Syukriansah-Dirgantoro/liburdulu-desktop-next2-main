'use client';

import { _mock } from '../../../_mock';

import Container from '@mui/material/Container';
import MainLayout from "src/layouts/main";
import Banner from "src/sections/reuseable/banner";

const _carouselsExample = [...Array(20)].map((_, index) => ({
    id: _mock.id(index),
    title: _mock.postTitle(index),
    coverUrl: _mock.image.cover(index),
    description: _mock.description(index),
}));

export default function ProductView() {
    return (
        <MainLayout>
            <Container sx={{ mt: -5, mb: 10 }}>
                <Banner data={_carouselsExample.slice(8, 12)} />
                <div className='grid grid-cols-2'>
                    <Banner data={_carouselsExample.slice(8, 12)} />
                    <Banner data={_carouselsExample.slice(8, 12)} />
                </div>
            </Container>
        </MainLayout>
    );
};
