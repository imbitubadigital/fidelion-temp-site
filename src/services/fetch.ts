export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, init)
  const response = await data.json()

  return response as T
}
