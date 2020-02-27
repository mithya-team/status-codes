declare type TKeys = keyof typeof STATUS_CODES;
export declare namespace STATUS_CODES {
    enum AUTH {
        MODEL_NOT_FOUND = 1000,
        MODEL_NOT_FOUND_DETAILS = " Model not found.",
        BODY_NOT_FOUND = 1001,
        INVALID_EMAIL_DATA = 1002,
        INVALID_PHONE_DATA = 1003,
        INVALID_DATA = 1004,
        USER_NOT_FOUND = 1005,
        DATA_NOT_FOUND = 1006,
        PROVIDER_ERROR = 1007,
        INVALID_TOKEN = 1008,
        CANNOT_SEND_OTP = 1009,
        EMAIL_REQUIRED = 1010,
        PHONE_REQUIRED = 1011,
        EMAIL_EXISTS = 1012,
        PHONE_EXISTS = 1013,
        PASSWORD_REQUIRED = 1014,
        OLD_PASSWORD_REQUIRED = 1015,
        NEW_PASSWORD_REQUIRED = 1016,
        EMAIL_OR_PHONE_NOT_FOUND = 1017,
        COUNTRY_CODE_AND_PHONE_REQUIRED = 1018,
        COUNTRY_CODE_REQUIRED = 1019,
        LOGIN_FAILED = 1020,
        EMAIL_PROVIDER_ERROR = 1021,
        PHONE_PROVIDER_ERROR = 1022,
        OTP_SENT = 1023,
        INVALID_OTP_TYPE = 1024,
        EMAIL_NOT_VERIFIED = 1025,
        PHONE_NOT_VERIFIED = 1026
    }
    const CUSTOM_CODES: any;
    /**
     * Gets status text from number
     * @param {Number} statusCode
     * @return {string} status text
     */
    function getStatusText(statusCode: number): string;
    /**
     * Gets status number from text.
     * @param {String} statusText
     * @return {Number} status number
     */
    function getStatusNumber(statusText: string): number;
    /**
     * Adds status code to CUSTOM_CODES.
     * @param {TKeys} type Category for this status code.
     * @param {object} keyVal Key Value pair for status code.
     * @example
     *      addStatusCode('AUTH',
    *               {
    *                   'CUSTOM_CODE' : 69
    *               }
    *           )
    *
    *
    */
    function addStatusCode(type: TKeys, keyVal: {
        string: number;
    }): void;
}
export {};
