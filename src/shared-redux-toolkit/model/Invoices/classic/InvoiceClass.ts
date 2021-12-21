import { HasFormatter } from "./InvoiceInterface";

export class Invoce implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {

    }
    format(): string {
        throw new Error("Method not implemented.");
    }
}