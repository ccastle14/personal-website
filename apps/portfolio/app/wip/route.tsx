export async function GET() {
  const upstreamUrl = 'https://RNSAFFN.com/poison2/';

  const upstreamResponse = await fetch(upstreamUrl, {
    method: 'GET',
    headers: {
      'Accept-Encoding': 'gzip',
    },
    cache: 'no-store',
  });

  const compressedBody = await upstreamResponse.arrayBuffer();

  return new Response(compressedBody, {
    status: upstreamResponse.status,
    headers: {
      'Content-Type': upstreamResponse.headers.get('Content-Type') ?? 'application/octet-stream',
      'Cache-Control': 'no-store',
    },
  });
}