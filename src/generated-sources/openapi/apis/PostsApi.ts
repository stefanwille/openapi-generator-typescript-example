/* tslint:disable */
/* eslint-disable */
/**
 * My API
 * An OpenAPI example API
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
    Post,
    PostFromJSON,
    PostToJSON,
} from '../models';

/**
 * 
 */
export class PostsApi extends runtime.BaseAPI {

    /**
     * Creates a new post
     */
    async createPostRaw(): Promise<runtime.ApiResponse<Array<Post>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/posts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PostFromJSON));
    }

    /**
     * Creates a new post
     */
    async createPost(): Promise<Array<Post>> {
        const response = await this.createPostRaw();
        return await response.value();
    }

    /**
     * Returns all posts
     */
    async getPostsRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/posts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns all posts
     */
    async getPosts(): Promise<void> {
        await this.getPostsRaw();
    }

}
