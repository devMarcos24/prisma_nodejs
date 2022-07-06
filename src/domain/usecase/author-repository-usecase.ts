export interface IAuthorsRepository<IData, IResponse> {
    create: (data: IData) => Promise<IResponse>
    findById: (id: string) => Promise<IResponse>
    findByName: (name: string) => Promise<IResponse>
}