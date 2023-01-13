/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { FunctionVersionListInstance } from "./function/functionVersion";

/**
 * Options to pass to update a FunctionInstance
 */
export interface FunctionContextUpdateOptions {
  /** A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters. */
  friendlyName: string;
}

/**
 * Options to pass to create a FunctionInstance
 */
export interface FunctionListInstanceCreateOptions {
  /** A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters. */
  friendlyName: string;
}
/**
 * Options to pass to each
 */
export interface FunctionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: FunctionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface FunctionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FunctionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FunctionContext {
  functionVersions: FunctionVersionListInstance;

  /**
   * Remove a FunctionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FunctionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FunctionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FunctionInstance) => any
  ): Promise<FunctionInstance>;

  /**
   * Update a FunctionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FunctionInstance
   */
  update(
    params: FunctionContextUpdateOptions,
    callback?: (error: Error | null, item?: FunctionInstance) => any
  ): Promise<FunctionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FunctionContextSolution {
  serviceSid: string;
  sid: string;
}

export class FunctionContextImpl implements FunctionContext {
  protected _solution: FunctionContextSolution;
  protected _uri: string;

  protected _functionVersions?: FunctionVersionListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Functions/${sid}`;
  }

  get functionVersions(): FunctionVersionListInstance {
    this._functionVersions =
      this._functionVersions ||
      FunctionVersionListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._functionVersions;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: FunctionInstance) => any
  ): Promise<FunctionInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FunctionInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: FunctionContextUpdateOptions,
    callback?: (error: Error | null, item?: FunctionInstance) => any
  ): Promise<FunctionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FunctionInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface FunctionPayload extends TwilioResponsePayload {
  functions: FunctionResource[];
}

interface FunctionResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  friendly_name: string;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class FunctionInstance {
  protected _solution: FunctionContextSolution;
  protected _context?: FunctionContext;

  constructor(
    protected _version: V1,
    payload: FunctionResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Function resource
   */
  sid: string;
  /**
   * The SID of the Account that created the Function resource
   */
  accountSid: string;
  /**
   * The SID of the Service that the Function resource is associated with
   */
  serviceSid: string;
  /**
   * The string that you assigned to describe the Function resource
   */
  friendlyName: string;
  /**
   * The ISO 8601 date and time in GMT when the Function resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the Function resource was last updated
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the Function resource
   */
  url: string;
  /**
   * The URLs of nested resources of the Function resource
   */
  links: Record<string, string>;

  private get _proxy(): FunctionContext {
    this._context =
      this._context ||
      new FunctionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a FunctionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a FunctionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FunctionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FunctionInstance) => any
  ): Promise<FunctionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FunctionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FunctionInstance
   */
  update(
    params: FunctionContextUpdateOptions,
    callback?: (error: Error | null, item?: FunctionInstance) => any
  ): Promise<FunctionInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: FunctionInstance) => any
  ): Promise<FunctionInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the functionVersions.
   */
  functionVersions(): FunctionVersionListInstance {
    return this._proxy.functionVersions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      friendlyName: this.friendlyName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FunctionSolution {
  serviceSid: string;
}

export interface FunctionListInstance {
  _version: V1;
  _solution: FunctionSolution;
  _uri: string;

  (sid: string): FunctionContext;
  get(sid: string): FunctionContext;

  /**
   * Create a FunctionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FunctionInstance
   */
  create(
    params: FunctionListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FunctionInstance) => any
  ): Promise<FunctionInstance>;

  /**
   * Streams FunctionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: FunctionInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: FunctionListInstanceEachOptions,
    callback?: (item: FunctionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FunctionPage) => any
  ): Promise<FunctionPage>;
  /**
   * Lists FunctionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FunctionInstance[]) => any
  ): Promise<FunctionInstance[]>;
  list(
    params: FunctionListInstanceOptions,
    callback?: (error: Error | null, items: FunctionInstance[]) => any
  ): Promise<FunctionInstance[]>;
  /**
   * Retrieve a single page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FunctionPage) => any
  ): Promise<FunctionPage>;
  page(
    params: FunctionListInstancePageOptions,
    callback?: (error: Error | null, items: FunctionPage) => any
  ): Promise<FunctionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FunctionListInstance(
  version: V1,
  serviceSid: string
): FunctionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as FunctionListInstance;

  instance.get = function get(sid): FunctionContext {
    return new FunctionContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Functions`;

  instance.create = function create(
    params: FunctionListInstanceCreateOptions,
    callback?: (error: Error | null, items: FunctionInstance) => any
  ): Promise<FunctionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FunctionInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | FunctionListInstancePageOptions
      | ((error: Error | null, items: FunctionPage) => any),
    callback?: (error: Error | null, items: FunctionPage) => any
  ): Promise<FunctionPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FunctionPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FunctionPage) => any
  ): Promise<FunctionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new FunctionPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class FunctionPage extends Page<
  V1,
  FunctionPayload,
  FunctionResource,
  FunctionInstance
> {
  /**
   * Initialize the FunctionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: FunctionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FunctionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FunctionResource): FunctionInstance {
    return new FunctionInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}