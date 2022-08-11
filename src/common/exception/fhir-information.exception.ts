import { HttpException, HttpStatus } from "@nestjs/common";

export class FhirInformationException extends HttpException {
    constructor(message) {
        super(message, HttpStatus.OK);
    }
}