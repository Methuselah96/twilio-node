/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the SettingsList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function SettingsList(version: V1): SettingsListInstance;

/**
 * Options to pass to update
 *
 * @property dialingPermissionsInheritance - `true` for this sub-account to inherit voice dialing permissions from the Master Project; otherwise `false`
 */
interface SettingsInstanceUpdateOptions {
  dialingPermissionsInheritance?: boolean;
}

interface SettingsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SettingsContext;
  /**
   * Constructs a settings
   */
  get(): SettingsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface SettingsPayload extends SettingsResource, Page.TwilioResponsePayload {
}

interface SettingsResource {
  dialing_permissions_inheritance: boolean;
  url: string;
}

interface SettingsSolution {
}


declare class SettingsContext {
  /**
   * Initialize the SettingsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   */
  constructor(version: V1);

  /**
   * fetch a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SettingsInstance) => any): Promise<SettingsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SettingsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SettingsInstanceUpdateOptions, callback?: (error: Error | null, items: SettingsInstance) => any): Promise<SettingsInstance>;
}


declare class SettingsInstance extends SerializableClass {
  /**
   * Initialize the SettingsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: SettingsPayload);

  private _proxy: SettingsContext;
  dialingPermissionsInheritance: boolean;
  /**
   * fetch a SettingsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SettingsInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SettingsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SettingsInstanceUpdateOptions, callback?: (error: Error | null, items: SettingsInstance) => any): void;
  url: string;
}


declare class SettingsPage extends Page<V1, SettingsPayload, SettingsResource, SettingsInstance> {
  /**
   * Initialize the SettingsPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SettingsSolution);

  /**
   * Build an instance of SettingsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SettingsPayload): SettingsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SettingsContext, SettingsInstance, SettingsList, SettingsListInstance, SettingsPage, SettingsPayload, SettingsResource, SettingsSolution }