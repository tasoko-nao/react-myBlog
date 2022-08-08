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
        id: "10",
        password: "10",
        name: "admin-user",
        isAdmin: true
    }
]