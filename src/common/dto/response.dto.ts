import { Iresponse } from "../interfaces/response.interface";

export class ResponseError implements Iresponse{
    constructor(infoMessage: string, data?: any) {
        this.success = false;
        this.message = infoMessage;
        this.data = data;
        console.warn(new Date().toString() + " - [Response]: " + infoMessage + (data ? " - " + JSON.stringify(data):""));
    }
    success: boolean;
    message: string;
    errorMessage: string;
    data: any[];
    error: any;
}

export class ResponseSuccess implements Iresponse{
    constructor(infoMessage: string, data?: any) {
        this.success = true;
        this.message = infoMessage;
        this.data = data;
        console.info(new Date().toString() + " - [Response]: " + infoMessage + (data ? " - " + JSON.stringify(data):""));
    }
    success: boolean;
    message: string;
    errorMessage: string;
    data: any[];
    error: any;
}