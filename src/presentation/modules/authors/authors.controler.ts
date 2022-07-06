import { IDataAuthors } from "../../../domain/models/authorsModel";
import { IAuthorsRepository } from "../../../domain/usecase/author-repository-usecase"
import CreateAuthorsService from "./services/core/create-author.service";

type IData = {
    name: string;
}


class AuthorsController {
    private createAuthorsService: CreateAuthorsService
    constructor({ authorsRepository }: { authorsRepository: IAuthorsRepository<IData, any> }) {
        this.createAuthorsService = new CreateAuthorsService({ authorsRepository })
    }

    async create(req: any, res: any) {
        const author = req.body
        const response = this.createAuthorsService.execute(author)
        return res.status(201).json({ statusCode: 201, body: response })
    }
}

export default AuthorsController