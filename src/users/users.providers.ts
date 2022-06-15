import { user_details } from "src/model/user.model";

export const userDetails = [
    {
        provide: 'USER_DETAILS_REPOSITORY',
        useValue: user_details,
    }
]