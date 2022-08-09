export type PostType = {
    id: number;
    userId: string;
    title: string;
    imgPath: string;
    content: string;
    created: string;
    category: Array<number>;
}
export const Posts: Array<PostType> = [
    {
        id: 1,
        userId: "1",
        title: "タイトル1",
        imgPath: "https://source.unsplash.com/1DoCgbgtoLs",
        content: "内容が入ります。内容が入ります。内容が入ります。内容が入ります。内容が入ります。",
        created: "2022/08/01",
        category: [1]
    },
    {
        id: 2,
        userId: "2",
        title: "タイトル2",
        imgPath: "https://source.unsplash.com/HeQswh6F3Uw",
        content: "内容が入ります。内容が入ります。内容が入ります。内容が入ります。内容が入ります。",
        created: "2022/08/01",
        category: [1, 2]
    },
    {
        id: 3,
        userId: "3",
        title: "タイトル3",
        imgPath: "https://source.unsplash.com/RFCFhhl3xfQ",
        content: "内容が入ります。内容が入ります。内容が入ります。内容が入ります。内容が入ります。",
        created: "2022/08/01",
        category: [1, 2, 3, 4]
    },
    {
        id: 4,
        userId: "1",
        title: "タイトル4",
        imgPath: "https://source.unsplash.com/BDpIYAKh9VM",
        content: "内容が入ります。内容が入ります。内容が入ります。内容が入ります。内容が入ります。",
        created: "2022/08/01",
        category: [1, 2, 4]
    },
    {
        id: 5,
        userId: "1",
        title: "タイトル5",
        imgPath: "https://source.unsplash.com/zY3mjsIvg0U",
        content: "内容が入ります",
        created: "2022/08/01",
        category: [1, 3]
    },
];

export type CategoryType = {
    id: number;
    name: string;
}
export const Categories: Array<CategoryType> = [
    {
        id: 1,
        name: "旅行",
    },
    {
        id: 2,
        name: "海外",
    },
    {
        id: 3,
        name: "温泉",
    },
    {
        id: 4,
        name: "絶景",
    },
    {
        id: 5,
        name: "料理",
    }
]