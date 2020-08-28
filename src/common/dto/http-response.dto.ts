export class HttpResponseDto<T> {
  success: boolean;
  data: T;
  error: string | null;
}