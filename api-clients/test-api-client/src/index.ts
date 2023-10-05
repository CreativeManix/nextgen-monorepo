export * from './lib/test-api-client';

export async function invokeAsync(
  getData: () => Promise<any>,
  handler: (isLoading: boolean, data: any, error: string) => void
) {
  handler(true, undefined, '');
  try {
    var data = await getData();
    handler(false, data, '');
    console.log(1);
  } catch {
    handler(false, undefined, 'Wrong');
  }
}
