// import React from "react";
// import "./aboutSection.css";
// import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import { useRef, useState } from "react";
// const center = { lat: 48.8584, lng: 2.2945 };

// const About = () => {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.GOOGLE_API_KEY,
//     libraries: ["places"],
//   });

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null));
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState("");
//   const [duration, setDuration] = useState("");

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef = useRef();
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destiantionRef = useRef();

//   if (!isLoaded) {
//     return <SkeletonText />;
//   }

//   async function calculateRoute() {
//     if (originRef.current.value === "" || destiantionRef.current.value === "") {
//       return;
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destiantionRef.current.value,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     });
//     setDirectionsResponse(results);
//     setDistance(results.routes[0].legs[0].distance.text);
//     setDuration(results.routes[0].legs[0].duration.text);
//   }

//   function clearRoute() {
//     setDirectionsResponse(null);
//     setDistance("");
//     setDuration("");
//     originRef.current.value = "";
//     destiantionRef.current.value = "";
//   }

//   const visitInstagram = () => {
//     // window.location = "https://instagram.com/meabhisingh";
//   };
//   return (
//     <div className="aboutSection">
//       <div></div>
//       <div className="aboutSectionGradient"></div>
//       <div className="aboutSectionContainer">
//         <Typography component="h1">About Us</Typography>

//         <div>
//           <div>
//             <Avatar
//               style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
//               src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F251-2510316_seamless-ecommerce-middle-east-e-commerce-logo-png.png&imgrefurl=https%3A%2F%2Fwww.pngkey.com%2Fmaxpic%2Fu2w7t4u2a9u2q8w7%2F&tbnid=IyuXopoPQ51sGM&vet=12ahUKEwjokaHF4MX4AhWmg84BHeIIDjcQMygGegUIARDGAQ..i&docid=r2DCN0rg8pTUIM&w=600&h=300&q=ecommerce%20text&ved=2ahUKEwjokaHF4MX4AhWmg84BHeIIDjcQMygGegUIARDGAQ"
//               alt="Founder"
//             />
//             <Typography>Muhammad Hamza</Typography>
//             <Button onClick={visitInstagram} color="primary">
//               Visit Instagram
//             </Button>
//             <span>
//               This is a sample wesbite made by Hamza Only with the purpose to
//               learn MERN Stack
//             </span>
//           </div>
//           <div className="aboutSectionContainer2">
//             {/* <Typography component="h2">Our Brands</Typography>
//             <a
//               href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
//               target="blank"
//             >
//               <YouTubeIcon className="youtubeSvgIcon" />
//             </a>

//             <a href="https://instagram.com/meabhisingh" target="blank">
//               <InstagramIcon className="instagramSvgIcon" />
//             </a> */}
//             <GoogleMap
//               center={center}
//               zoom={15}
//               mapContainerStyle={{ width: "100%", height: "100%" }}
//               options={{
//                 zoomControl: false,
//                 streetViewControl: false,
//                 mapTypeControl: false,
//                 fullscreenControl: false,
//               }}
//               onLoad={(map) => setMap(map)}
//             >
//               <Marker position={center} />
//               {directionsResponse && (
//                 <DirectionsRenderer directions={directionsResponse} />
//               )}
//             </GoogleMap>
//           </div>
//         </div>
//       </div>
//       {/* <div className="aboutSectionContainer"></div> */}
//     </div>
//   );
// };

// export default About;
