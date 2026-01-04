export const fetchStations = async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/fc7dc242f41393845d90edaa99e32e28f1ddfe24/train-stations.json',
  )
  if (!response.ok) {
    throw new Error('Failed to fetch stations')
  }
  return response.json()
}
