import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

const markers = [
  {
    lat: 41.8832,
    lng: -87.6324,
    imageUrl: "/assets/images/people/Liam-Van-den-Bogert.jpg",
    name: "Liam Van den Bogert",
    city: "Chicago",
    country: "USA",
  },
  {
    lat: -6.1944,
    lng: 106.8229,
    imageUrl: "/assets/images/people/Marie-Wibisana.jpg",
    name: "Marie Wibisana",
    city: "Jakarta",
    country: "Indonesia",
  },
  {
    lat: 34.51,
    lng: -93.05,
    imageUrl: "/assets/images/people/Sneh-Patel.jpg",
    name: "Sneh Patel",
    city: "Hot Springs",
    country: "USA",
  },
  {
    lat: 6.6137,
    lng: 3.3553,
    imageUrl: "/assets/images/people/Lorenzo-Niat.jpeg",
    name: "Lorenza Niat",
    city: "Lagos",
    country: "Nigeria",
  },
  {
    lat: 3.1319,
    lng: 101.6841,
    imageUrl: "/assets/images/people/Thomas-Chin.png",
    name: "Thomas Chin",
    city: "Kuala Lumpur",
    country: "Malaysia",
  },
  {
    lat: 6.6137,
    lng: 3.3553,
    imageUrl: "/assets/images/people/Victory-Ladipo.jpeg",
    name: "Victory Ladipo",
    city: "Lagos",
    country: "Nigeria",
  },
  {
    lat: 36.1156,
    lng: -97.0584,
    imageUrl: "/assets/images/people/Michelle-Park.jpeg",
    name: "Michelle Park",
    city: "Stillwater",
    country: "USA",
  },
  {
    lat: 38.9121,
    lng: -77.4986,
    imageUrl: "/assets/images/people/Jocelyn-Chang.jpeg",
    name: "Jocelyn Chang",
    city: "South Riding",
    country: "USA",
  },
  
];

const GlobeComponent = () => {
  const globeEl = useRef();
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(window.innerWidth <= 768); // Current code for detecting if user is on mobile -- might need to be revised to incapsulate all mobile devices
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const globe = globeEl.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;

      // Disable zooming while keeping rotation and panning
      globe.controls().enableZoom = false;
      globe.controls().enableRotate = true;
      globe.controls().enablePan = isMobile ? false : true; // Disable panning on mobile for simpler interaction

      // Add lighting so materials are visible
      // const scene = globe.scene();
      // scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    }
  }, [isMobile]);

  // Calculate responsive dimensions
  const globeHeight = isMobile 
    ? Math.min(windowDimensions.height * 0.5, 400)
    : windowDimensions.height * 0.8;

  // Calculate responsive section height
  const sectionHeight = isMobile ? "100vh" : "95vh";

  return (
    <section
      className="globe-section"
      style={{
        width: "100vw",
        height: sectionHeight,
        background: "var(--sky_blue_bg, linear-gradient(180deg, #CEEFFF 0%, #FBFEFF 100%))",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Text banners positioned behind the globe */}
      <div className="globe-text-banners">
        <div className="text-banner text-banner-left">
          <span>We are...</span>
        </div>
        <div className="text-banner text-banner-right">
          <span>all around.</span>
        </div>
      </div>
      
      <div style={{ 
        width: "100%", 
        height: "100%", 
        position: "relative", 
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "flex-start",
        paddingTop: isMobile ? "0" : "2rem",
        maxWidth: "100vw",
        overflow: "hidden"
      }}>
        <Globe
          ref={globeEl}
          globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-day.jpg"
          width={windowDimensions.width}
          height={globeHeight}
          backgroundColor="rgba(0,0,0,0)"
          objectsData={markers}
          objectLat={(d) => d.lat}
          objectLng={(d) => d.lng}
          objectLabel={(d) => `
            <div style="
              background: rgba(0,0,0,0.8);
              padding: ${isMobile ? '8px 12px' : '6px 10px'};
              border-radius: 6px;
              font-size: ${isMobile ? '14px' : '13px'};
              color: white;
              text-align: center;
              pointer-events: none;
            ">
              <div style="font-weight: bold;">${d.name}</div>
              <div>${d.city}, ${d.country}</div>
            </div>
          `}
          objectThreeObject={(d) => {
            const radius = 5;
            const height = 2;

            // Cylinder body
            const cylinderGeometry = new THREE.CylinderGeometry(
              radius,
              radius,
              height,
              64,
              1,
              false
            );
            const cylinderMaterial = new THREE.MeshStandardMaterial({
              color: "#888",
            });
            const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
            cylinder.rotation.x = Math.PI / 2;

            // Top disc with avatar
            const topCircleGeometry = new THREE.CircleGeometry(radius, 64);
            const topMaterial = new THREE.MeshStandardMaterial({
              color: "#ffffff",
            });
            const topCircle = new THREE.Mesh(topCircleGeometry, topMaterial);
            // topCircle.rotation.set(0, 0, 0); // ✅ DON'T rotate it — it already faces +Z
            topCircle.position.z = height / 2 + 0.5;
            topCircle.rotation.set(0.1, 0, 0); // slight angle (~5.7 degrees)

            // Load avatar texture
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(
              d.imageUrl,
              (texture) => {
                texture.wrapS = THREE.ClampToEdgeWrapping;
                texture.wrapT = THREE.ClampToEdgeWrapping;

                // ✅ Use trilinear filtering (mipmap + smooth scaling)
                texture.minFilter = THREE.LinearMipMapLinearFilter;
                texture.magFilter = THREE.LinearFilter;

                // ✅ Force mipmap generation in case it's not done automatically
                texture.generateMipmaps = true;

                // ✅ Anisotropic filtering: critical for reducing shimmer at angles
                const renderer = globeEl.current.renderer();
                const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
                texture.anisotropy = maxAnisotropy;

                topMaterial.map = texture;
                topMaterial.needsUpdate = true;
              },
              undefined,
              (err) => {
                console.error("Failed to load avatar for", d.name, err);
                topMaterial.color.set("#f00");
              }
            );

            // GLOW RING
            const glowRadiusInner = radius * 1.05;
            const glowRadiusOuter = radius * 1.2;
            const glowGeometry = new THREE.RingGeometry(
              glowRadiusInner,
              glowRadiusOuter,
              64
            );

            const glowMaterial = new THREE.MeshBasicMaterial({
              color: 0x00ffff, // Glow color (cyan here)
              transparent: true,
              opacity: 0.5,
              side: THREE.DoubleSide,
              blending: THREE.AdditiveBlending,
              depthWrite: false,
            });

            const glowRing = new THREE.Mesh(glowGeometry, glowMaterial);
            glowRing.rotation.set(0, 0, 0); // Match avatar orientation
            glowRing.position.z = topCircle.position.z + 0.001; // Just above the avatar
            // Group both
            const group = new THREE.Group();
            group.add(cylinder);
            group.add(topCircle);
            group.add(glowRing);

            return group;
          }}
          objectThreeObjectUpdate={(obj) => {
            // Optional: slow spin
            obj.rotation.z += 0.01;
          }}
          onGlobeReady={() => {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;

            // Set initial zoom level (lower altitude = more zoomed in)
            globeEl.current.pointOfView(
              { lat: 0, lng: 0, altitude: 1.8 },
              1000
            );
          }}
        />
        
        {/* Mobile single banner - positioned between globe and button */}
        <div className="text-banner text-banner-mobile">
          <span>We are all around.</span>
        </div>
        
        <div className="text-center">
          <a href="#mission" className="btn btn-link learn-more-button">
            Learn more{" "}
            <img
              src="/assets/images/arrow-down.svg"
              alt="Arrow Down"
              style={{ height: "1.5em", verticalAlign: "middle" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GlobeComponent;
