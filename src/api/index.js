
export async function getFetchRequestToServer(url){
  const response = await fetch(url);
  return await response.json();
}