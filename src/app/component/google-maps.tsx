import { GoogleMapsEmbed } from '@next/third-parties/google'
import { getGoogleMapsApiKey } from '../action'

const MapPage = async () => {
  let apiKey: string;
  let error: string | null = null;

  try {
    apiKey = await getGoogleMapsApiKey();
  } catch (err) {
    console.error('Failed to load Google Maps API key:', err);
    error = 'Failed to load Google Maps API key';
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <GoogleMapsEmbed
        apiKey={apiKey!}
        height={400}
        width="100%"
        mode="place"
        q="Brooklyn Bridge,New York,NY"
      />
    </div>
  );
}
export default MapPage;