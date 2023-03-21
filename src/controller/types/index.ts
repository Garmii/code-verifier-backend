/**
 * Basic JSON response for controllers
 */
export type BasicResponse = {
    message: string
}

/**
 * JSON error response for controllers
 */
export type ErrorResponse = {
    error: string,
    messagge: string
}