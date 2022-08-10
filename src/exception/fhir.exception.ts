import { HttpException, HttpStatus } from "@nestjs/common";

export class FhirException extends HttpException {
    constructor() {
        super("Error", HttpStatus.BAD_REQUEST);
        //super("Error", HttpStatus.BAD_REQUEST);
    }
}