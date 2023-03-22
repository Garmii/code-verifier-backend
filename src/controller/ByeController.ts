import { BasicResponse, GoodByeResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class ByeController implements IHelloController {
    public async getMessage(name?: string): Promise<GoodByeResponse> {
       return {
        message: `Goodbye ${name || "anonimo"}`,
        date: new Date(),
       }
    }

}