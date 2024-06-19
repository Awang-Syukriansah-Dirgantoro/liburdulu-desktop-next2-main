'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { _mock } from '../../../_mock';

import Banner from 'src/sections/reuseable/banner';
import HomepageCategory from '../homepage-category';
import HomepageSupermitra from '../homepage-supermitra';
import MainLayout from 'src/layouts/main';
import HomepageRecomprod from '../homepage-recomprod';

const _carouselsExample = [...Array(20)].map((_, index) => ({
    id: _mock.id(index),
    title: _mock.postTitle(index),
    coverUrl: _mock.image.cover(index),
    description: _mock.description(index),
}));

export default function HomepageView() {
    return (
        <MainLayout>
            <Container sx={{ mt: 5 }} className='flex justify-center'>
                <Banner data={_carouselsExample.slice(8, 12)} />
                <HomepageCategory />
                <HomepageSupermitra />
                <HomepageRecomprod />
            </Container>
        </MainLayout>
    );
};

