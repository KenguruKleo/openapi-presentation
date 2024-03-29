/* tslint:disable */
/* eslint-disable */
/**
 * Online School
 * Online School Application is where students and teachers meet together
 *
 * The version of the OpenAPI document: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum StudentStatus {
    InReview = 'IN_REVIEW',
    Created = 'CREATED',
    Deleted = 'DELETED'
}

export function StudentStatusFromJSON(json: any): StudentStatus {
    return StudentStatusFromJSONTyped(json, false);
}

export function StudentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudentStatus {
    return json as StudentStatus;
}

export function StudentStatusToJSON(value?: StudentStatus | null): any {
    return value as any;
}

