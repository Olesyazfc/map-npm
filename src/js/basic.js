export default class ErrorRepository {
    constructor(errors) {
        this.errors = new Map(errors)
    }
    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code)
        } else {
            return 'Unknown error'
        }
    }
}