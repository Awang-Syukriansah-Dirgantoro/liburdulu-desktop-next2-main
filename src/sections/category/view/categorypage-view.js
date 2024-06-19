'use client';

import MainLayout from "src/layouts/main";

const _carouselsExample = [...Array(20)].map((_, index) => ({
    id: _mock.id(index),
    title: _mock.postTitle(index),
    coverUrl: _mock.image.cover(index),
    description: _mock.description(index),
}));

export default function CategoryView() {
    return(
        <MainLayout>

        </MainLayout>
    );
};
