import { IAuthorsRepository } from "../../../../domain/usecase/author-repository-usecase";
import { PrismaClient } from '@prisma/client'

type IData = {
    name: string;
}

const prisma = new PrismaClient()

class AuthorsRepository implements IAuthorsRepository<IData, any> {
    async create(data: IData) {
        return await prisma.authors.create({ data })
    }

    async findById(id: string) {
        return await prisma.authors.findFirst({
            where: {
                id
            }
        })
    }

    async findByName(name: string) {
        return await prisma.authors.findFirst({
            where: {
                name
            }
        })
    }
}

export default AuthorsRepository