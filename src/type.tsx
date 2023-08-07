export enum PAGE_ENUM {
    USERS = "USERS",
    MEETING = "MEETING",
}

export enum ROUTE_ENUM {
    HOME_PAGE = "/home",
    DATE_PAGE = "/home/date",
    MEETINGS = "/meetings",
}

export enum API_ENUM {
    USERS = "/api/users",
    USER = "/api/user",
    MEETING = "/api/meeting",
}

export interface User {
    user: any;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    meeting: Meeting[]
}

export interface Meeting {
    id: string;
    description: string;
    users: User[];
    startTime: number;
    endTime: number;
    date: Date;
}

export const DefaultMeeting: Meeting = {
    id: "",
    description: "",
    users: [],
    startTime: 0,
    endTime: 0,
    date: new Date(),
};

