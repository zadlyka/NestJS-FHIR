import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class FhirExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception instanceof HttpException
                  ? exception.getStatus()
                  : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception instanceof HttpException
                  ? exception.message
                  : "An unexpected internal error has occurred.";

    let severity, code;

    switch(status){
      case 200:
        severity = "information",
        code = "informational"
        break;
      case 401:
        severity = "error",
        code = "security"
        break;
      case 402:
        severity = "error",
        code = "required"
        break;
      case 403:
        severity = "error",
        code = "forbidden"
        break;
      case 404:
        severity = "error",
        code = "not-found"
        break;
      case 400:
      default:
        severity = "error",
        code = "exception"
        break;
    }

    response
      .status(status)
      .json(
        {
          resourceType : "OperationOutcome",
          issue : [{
              severity : severity,
              code : code,
              diagnostics : message,
              expression : [request.url] 
          }]
        }
      );
  }
}