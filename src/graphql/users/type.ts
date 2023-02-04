export type TUser = {
    id: String,
    name: String,
};

export type TUserData = {
    listUsers: Array<TUser> | null,
}