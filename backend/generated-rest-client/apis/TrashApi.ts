/* tslint:disable */
/* eslint-disable */
/**
 * PUT REST API
 * モバイルアプリハンズオンで作成するPUTアプリのREST API。
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Trash,
    TrashFromJSON,
    TrashToJSON,
} from '../models';

export interface PostTrashRequest {
    body?: Blob;
}

/**
 * 
 */
export class TrashApi extends runtime.BaseAPI {

    /**
     * 登録しているゴミ拾いを全て取得する。 
     * ゴミ拾い一覧の取得
     */
    async getTrashListRaw(): Promise<runtime.ApiResponse<Array<Trash>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/trash`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TrashFromJSON));
    }

    /**
     * 登録しているゴミ拾いを全て取得する。 
     * ゴミ拾い一覧の取得
     */
    async getTrashList(): Promise<Array<Trash>> {
        const response = await this.getTrashListRaw();
        return await response.value();
    }

    /**
     * ゴミ拾いを登録する。 
     * ゴミ拾いの登録
     */
    async postTrashRaw(requestParameters: PostTrashRequest): Promise<runtime.ApiResponse<Trash>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'image/jpg';

        const response = await this.request({
            path: `/api/trash`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TrashFromJSON(jsonValue));
    }

    /**
     * ゴミ拾いを登録する。 
     * ゴミ拾いの登録
     */
    async postTrash(requestParameters: PostTrashRequest): Promise<Trash> {
        const response = await this.postTrashRaw(requestParameters);
        return await response.value();
    }

}