// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBRzoWdJblGhJQBXy1v5nE6Rr-vqovEpSI",
	authDomain: "goodfoodproject-93eff.firebaseapp.com",
	projectId: "goodfoodproject-93eff",
	storageBucket: "goodfoodproject-93eff.appspot.com",
	messagingSenderId: "613538158487",
	appId: "1:613538158487:web:bd9ce96424404ea81716d2",
};

//////////////////////////////////
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Imports the Google Cloud client library
// Creates a client
/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The ID of your GCS bucket
const bucketName = "goodfoodproject-93eff";

// The origin for this CORS config to allow requests from
const origin = "http://localhost:3000"; //window.location.host;
// The response header to share across origins
const responseHeader = "Content-Type";

// The maximum amount of time the browser can make requests before it must
// repeat preflighted requests
const maxAgeSeconds = 3600;

// The name of the method
// See the HttpMethod documentation for other HTTP methods available:
// https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/urlfetch/HTTPMethod
const method = "GET";

async function configureBucketCors() {
	console.log("----------------------");
	await storage.bucket(bucketName).setCorsConfiguration([
		{
			maxAgeSeconds,
			method: [method],
			origin: [origin],
			responseHeader: [responseHeader],
		},
	]);

	console.log(`Bucket ${bucketName} was updated with a CORS config
      to allow ${method} requests from ${origin} sharing
      ${responseHeader} responses across origins`);
}

configureBucketCors().catch(console.error);
