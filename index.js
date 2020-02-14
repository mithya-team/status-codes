"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var STATUS_CODES;
(function (STATUS_CODES) {
    let AUTH;
    (function (AUTH) {
        AUTH[AUTH["MODEL_NOT_FOUND"] = 1000] = "MODEL_NOT_FOUND";
        AUTH["MODEL_NOT_FOUND_DETAILS"] = " Model not found.";
        AUTH[AUTH["BODY_NOT_FOUND"] = 1001] = "BODY_NOT_FOUND";
        AUTH[AUTH["INVALID_EMAIL_DATA"] = 1002] = "INVALID_EMAIL_DATA";
        AUTH[AUTH["INVALID_PHONE_DATA"] = 1003] = "INVALID_PHONE_DATA";
        AUTH[AUTH["INVALID_DATA"] = 1004] = "INVALID_DATA";
        AUTH[AUTH["USER_NOT_FOUND"] = 1005] = "USER_NOT_FOUND";
        AUTH[AUTH["DATA_NOT_FOUND"] = 1006] = "DATA_NOT_FOUND";
        AUTH[AUTH["PROVIDER_ERROR"] = 1007] = "PROVIDER_ERROR";
        AUTH[AUTH["INVALID_TOKEN"] = 1008] = "INVALID_TOKEN";
        AUTH[AUTH["CANNOT_SEND_OTP"] = 1009] = "CANNOT_SEND_OTP";
        AUTH[AUTH["EMAIL_REQUIRED"] = 1010] = "EMAIL_REQUIRED";
        AUTH[AUTH["PHONE_REQUIRED"] = 1011] = "PHONE_REQUIRED";
        AUTH[AUTH["EMAIL_EXISTS"] = 1012] = "EMAIL_EXISTS";
        AUTH[AUTH["PHONE_EXISTS"] = 1013] = "PHONE_EXISTS";
        AUTH[AUTH["PASSWORD_REQUIRED"] = 1014] = "PASSWORD_REQUIRED";
        AUTH[AUTH["OLD_PASSWORD_REQUIRED"] = 1015] = "OLD_PASSWORD_REQUIRED";
        AUTH[AUTH["NEW_PASSWORD_REQUIRED"] = 1016] = "NEW_PASSWORD_REQUIRED";
        AUTH[AUTH["EMAIL_OR_PHONE_NOT_FOUND"] = 1017] = "EMAIL_OR_PHONE_NOT_FOUND";
        AUTH[AUTH["COUNTRY_CODE_AND_PHONE_REQUIRED"] = 1018] = "COUNTRY_CODE_AND_PHONE_REQUIRED";
        AUTH[AUTH["COUNTRY_CODE_REQUIRED"] = 1019] = "COUNTRY_CODE_REQUIRED";
        AUTH[AUTH["LOGIN_FAILED"] = 1020] = "LOGIN_FAILED";
        AUTH[AUTH["EMAIL_PROVIDER_ERROR"] = 1021] = "EMAIL_PROVIDER_ERROR";
        AUTH[AUTH["PHONE_PROVIDER_ERROR"] = 1022] = "PHONE_PROVIDER_ERROR";
        AUTH[AUTH["OTP_SENT"] = 1023] = "OTP_SENT";
        AUTH[AUTH["INVALID_OTP_TYPE"] = 1024] = "INVALID_OTP_TYPE";
    })(AUTH = STATUS_CODES.AUTH || (STATUS_CODES.AUTH = {}));
    STATUS_CODES.CUSTOM_CODES = {};
    function getStatusText(statusCode) {
        let numTotext = Object.values(STATUS_CODES).map((i) => {
            return i[statusCode];
        });
        return numTotext.filter(x => x)[0];
    }
    STATUS_CODES.getStatusText = getStatusText;
    ;
    function getStatusNumber(statusCode) {
        let textToNum = Object.values(STATUS_CODES).map((i) => {
            return i[statusCode];
        });
        return textToNum.filter(i => i)[0];
    }
    STATUS_CODES.getStatusNumber = getStatusNumber;
    ;
    function getCustomStatusCode(statusCode) {
        let numTotext = Object.values(STATUS_CODES.CUSTOM_CODES)
            .map((context) => {
            return Object.keys(context).filter((key) => context[key] === statusCode)[0];
        });
        return numTotext[0];
    }
    STATUS_CODES.getCustomStatusCode = getCustomStatusCode;
    function getCustomStatusNumber(statusCode) {
        let numTotext = Object.values(STATUS_CODES.CUSTOM_CODES)
            .map((context) => {
            if (context.hasOwnProperty(statusCode)) {
                return context[statusCode];
            }
        });
        return numTotext[0];
    }
    STATUS_CODES.getCustomStatusNumber = getCustomStatusNumber;
    function addStatusCode(type, keyVal) {
        STATUS_CODES.CUSTOM_CODES[type] = Object.assign(Object.assign({}, STATUS_CODES.CUSTOM_CODES[type]), keyVal);
    }
    STATUS_CODES.addStatusCode = addStatusCode;
})(STATUS_CODES = exports.STATUS_CODES || (exports.STATUS_CODES = {}));
