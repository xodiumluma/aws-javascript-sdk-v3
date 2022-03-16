/**
 * An error representing a failure of an individual provider.
 *
 * This error class has special meaning to the {@link chain} method. If a
 * provider in the chain is rejected with an error, the chain will only proceed
 * to the next provider if the value of the `tryNextLink` property on the error
 * is truthy. This allows individual providers to halt the chain and also
 * ensures the chain will stop if an entirely unexpected error is encountered.
 */
export class ProviderError extends Error {
  name = "ProviderError";
  constructor(message: string, public readonly tryNextLink: boolean = true) {
    super(message);
  }
  static from(error: Error, tryNextLink = true): ProviderError {
    Object.defineProperty(error, "tryNextLink", {
      value: tryNextLink,
      configurable: false,
      enumerable: false,
      writable: false,
    });
    return error as ProviderError;
  }
}
