import { IDataAuthors } from "../../../../../domain/models/authorsModel";
import { IAuthorsRepository } from "../../../../../domain/usecase/author-repository-usecase";

class CreateAuthorsService {
    private _authorsRepository
    constructor({ authorsRepository }: { authorsRepository: any }) {
        this._authorsRepository = authorsRepository
    }

    async execute(data: IDataAuthors) {
        const exitsAuthor = await this._authorsRepository.findByName(data.name)

        if (exitsAuthor) {
            throw new Error('author already exists')
        }

        const author = await this._authorsRepository.create(data)

        return author
    }
}

export default CreateAuthorsService