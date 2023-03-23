import { UserDocument } from "@/model/entities/User";
import { PartialUserType, UserType } from "@/model/validators/UserValidator";

export interface IUserFacade {
    create: (user: PartialUserType) => Promise<UserDocument>;

    update: (id: string, user: UserType) => Promise<UserDocument>;

    delete: (id: string) => Promise<UserDocument>;

    get: (id: string) => Promise<UserDocument>;

    getAll: (skip: number, limit: number) => Promise<UserDocument[]>;
}
