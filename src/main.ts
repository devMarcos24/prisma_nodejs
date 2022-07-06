import Express from 'express'
import cors from 'cors'
import AuthorsController from './presentation/modules/authors/authors.controler'
import AuthorsRepository from './presentation/common/repository/authors'
import AuthorsRouters from './presentation/modules/authors/authors.routers'

const port = process.env.PORT || 3000
async function main() {

    // configuração express
    const app = Express()
    app.use(cors());
    app.use([
        Express.json(),
        Express.urlencoded({
            extended: true,
        }),
    ]);

    const authorsRepository = new AuthorsRepository()

    const rootRouter = Express.Router()

    // instancia de controllers
    const authorsController = new AuthorsController({ authorsRepository })

    // instancia de routers
    const authorsRouters = new AuthorsRouters()
    rootRouter.use('/authors', authorsRouters.configure(authorsController))

    app.use(rootRouter)

    app.listen(port, () => console.log(`app running on port:${port}`))
}

main()