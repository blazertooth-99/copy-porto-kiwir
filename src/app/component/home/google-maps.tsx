import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function MapPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!

  if (!apiKey) {
    return <div className='text-red'>Error: Google Maps API key is not set</div>
  }

  return (
    <GoogleMapsEmbed
      apiKey={apiKey}
      height={250}
      width="100%"
      mode="place"
      q="Brooklyn Bridge,New York,NY"
    />
  )
}