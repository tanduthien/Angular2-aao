export class AdClient {
    constructor(
        public id?: number,
        public kind?: string,
        public productCode?: string,
        public supportsReporting?: boolean,
        public arcOptIn?: boolean,
        public accountId?: string,
    ) { }
}
