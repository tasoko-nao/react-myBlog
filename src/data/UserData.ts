export type UserType = {
    id: string;
    password: string;
    name: string
    isAdmin: boolean;
}

export const UserList: Array<UserType> = [
    {
        id: "1",
        password: "1",
        name: "user-1",
        isAdmin: false,
    },
    {
        id: "2",
        password: "2",
        name: "user-2",
        isAdmin: false,
    },
    {
        id: "3",
        password: "3",
        name: "user-3",
        isAdmin: false,
    },
    {
        id: "10",
        password: "10",
        name: "super-man",
        isAdmin: true
    }
]