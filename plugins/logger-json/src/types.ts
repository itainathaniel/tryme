export type AdditionalProperties = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export interface Settings {
  logLevel: string;
  logRequests: boolean;
  sensitiveKeys: string[];
  additionalLogProperties: AdditionalProperties;
  pinoPretty: boolean;
}
