import Express from 'express'

class AuthorsRouters {
    private router = Express.Router()

    configure(authorsController: any) {
        this.router.post('/', authorsController.create)

        return this.router
    }
}

export default AuthorsRouters