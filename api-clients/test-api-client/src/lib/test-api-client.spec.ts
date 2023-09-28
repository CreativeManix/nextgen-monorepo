import { testApiClient } from './test-api-client';

describe('testApiClient', () => {
  it('should work', () => {
    expect(testApiClient()).toEqual('test-api-client');
  });
});
