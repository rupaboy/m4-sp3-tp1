
const TShirts = ({
  isTShirtMale = false,
  isTShirtStampInverted = false,
  tShirtSize = 1,
  tShirtColor = '#FFF',
  tShirtStamp = 'src/assets/50.svg' }) => (


  <div className={`
  ${ tShirtSize === 0
    ? 'scale-90'
    : tShirtSize === 1
    ? 'scale-100'
    : tShirtSize === 2
    ? 'scale-110'
    : 'scale-120'
  }
  relative flex flex-col items-start w-100 aspect-[1/1] mx-auto mb-auto`}>

    <main //STAMP!!!
      className={`
     ${isTShirtStampInverted ? 'opacity-80': 'invert-100'}
    absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center
    `}>
      <img
        className={`
      ${isTShirtMale ? 'top-26' : 'top-25'}
      relative object-contain max-w-28 max-h-14 w-full h-full`}
        src={tShirtStamp}
        alt=""
      />
    </main>


    {/* FEMALE SHIRT CROP (tShirtColor depositary) */}

    {!isTShirtMale &&
      <main>

        <svg className='absolute scale-80'
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 101.121 93.192"
        >
          <path
            d="M84.76 60.603c-12.177 2.162-28.403 3.526-38.926 10.408-2.522 1.42-.813 6.38 2.081 11.339 2.89 4.96 5.883 8.048 8.408 6.629 2.288-1.59 4.967-2.922 7.437-4.325 10.571 17.724 3.52 35.95.912 58.672.035 5.3 9.616 10.437 30.497 10.469 20.881-.032 30.464-5.17 30.499-10.47-2.609-22.721-9.662-40.947.911-58.671 2.472 1.403 5.15 2.735 7.437 4.325 2.527 1.42 5.518-1.67 8.408-6.63 2.894-4.959 4.604-9.918 2.08-11.338-12.44-7.96-25.268-8.127-38.925-10.408-.118 0-.196.025-.196.062-1.666 2.693-7.09 2.681-10.207 2.83-3.117-.149-8.538-.137-10.206-2.83-.022-.035-.078-.062-.195-.062z"
            style={{
              fill: tShirtColor,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-44.61 -60.603)"
          />
        </svg>

        {/* FEMALE SHIRT ORNAMENTS */}

        <svg className='absolute scale-80'
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 101.121 93.192"
        >
          <defs>
            <linearGradient id="a">
              <stop
                offset={0}
                style={{
                  stopColor: "#000",
                  stopOpacity: .1,
                }}
              />
              <stop
                offset={1}
                style={{
                  stopColor: "#555",
                  stopOpacity: .7,
                }}
              />
            </linearGradient>
            <linearGradient
              xlinkHref="#a"
              id="e"
              x1={134.396}
              x2={134.127}
              y1={72.497}
              y2={70.935}
              gradientTransform="matrix(-39.11037 0 0 39.11037 5351.747 -2733.062)"
              gradientUnits="userSpaceOnUse"
            />
            <linearGradient
              xlinkHref="#a"
              id="b"
              x1={133.682}
              x2={135.486}
              y1={73.288}
              y2={71.197}
              gradientTransform="matrix(39.11037 0 0 39.11037 -5161.591 -2733.062)"
              gradientUnits="userSpaceOnUse"
            />
            <linearGradient
              xlinkHref="#a"
              id="c"
              x1={134.396}
              x2={134.127}
              y1={72.497}
              y2={70.935}
              gradientTransform="matrix(-39.11037 0 0 39.11037 5351.747 -2733.062)"
              gradientUnits="userSpaceOnUse"
            />
            <linearGradient
              xlinkHref="#a"
              id="d"
              x1={134.396}
              x2={134.127}
              y1={72.497}
              y2={70.935}
              gradientTransform="matrix(-39.11037 0 0 39.11037 5351.747 -2733.062)"
              gradientUnits="userSpaceOnUse"
            />
          </defs>
          <path //Silueta
            d="M84.76 60.603c-12.177 2.162-28.403 3.526-38.926 10.408-2.522 1.42-.813 6.38 2.081 11.339 2.89 4.96 5.883 8.048 8.408 6.629 2.288-1.59 4.967-2.922 7.437-4.325 10.571 17.724 3.52 35.95.912 58.672.035 5.3 9.616 10.437 30.497 10.469 20.881-.032 30.464-5.17 30.499-10.47-2.609-22.721-9.662-40.947.911-58.671 2.472 1.403 5.15 2.735 7.437 4.325 2.527 1.42 5.518-1.67 8.408-6.63 2.894-4.959 4.604-9.918 2.08-11.338-12.44-7.96-25.268-8.127-38.925-10.408-.118 0-.196.025-.196.062-1.666 2.693-7.09 2.681-10.207 2.83-3.117-.149-8.538-.137-10.206-2.83-.022-.035-.078-.062-.195-.062z"
            style={{
              fill: "url(#b)",
              fillOpacity: 1,
              stroke: '#fff',
              strokeWidth: .1,
              strokeOpacity: .1,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-44.61 -60.603)"
          />
          <path //Manga derecha
            d="M143.089 71.254c-2.186.254-6.11 4.77-7.68 8.165-1.263 2.735-3.258 7.861-.99 9.135 2.269 1.274 5.067-2.017 7.66-6.467 2.597-4.45 4.347-9.317 2.08-10.59a1.945 1.945 0 0 0-.766-.243 1.546 1.546 0 0 0-.313 0z"
            style={{
              fill: "url(#c)",
              fillOpacity: 1,
              strokeWidth: .2,
              stroke: '#000',
              strokeOpacity: .5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-44.61 -60.603)"
          />
          <path //Manga Izquierda
            d="M46.885 71.234c-.034.004-.078.017-.117.02a1.945 1.945 0 0 0-.767.242c-2.264 1.274-.512 6.14 2.081 10.59 2.597 4.451 5.395 7.742 7.66 6.468 2.268-1.274.473-5.574-2.124-10.024h-.02c-2.167-3.716-4.44-7.03-6.447-7.276-.078-.008-.117-.021-.196-.02-.02 0-.039-.005-.078 0z"
            style={{
              fill: "url(#d)",
              fillOpacity: 1,
              strokeWidth: .2,
              stroke: '#000',
              strokeOpacity: .5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-44.61 -60.603)"
          />
          <path //Cuello
            d="M84.558 60.785c-2.17 6.988 3.211 13.369 10.692 13.298 7.662-.074 12.781-6.29 10.61-13.278-1.482 2.535-5.627 2.864-10.61 2.93-4.984-.066-9.21-.414-10.692-2.95z"
            style={{
              fill: "url(#e)",
              fillOpacity: 1,
              strokeWidth: .2,
              stroke: '#000',
              strokeOpacity: .5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-44.61 -60.603)"
          />
        </svg>


      </main>
    }

    {isTShirtMale &&

      <main>
        {/* MALE SHIRT CROP (colorShirt depositary) */}

        <svg className='absolute scale-80'
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 103.475 93.211"
        >
          <path
            d="M219.806 60.825c-.079 0-.157.025-.157.059-1.74 2.76-7.526 2.689-10.655 2.72-3.129.032-8.914.102-10.656-2.658-.022-.035-.078-.058-.156-.058-12.382 2.171-28.884 3.49-39.664 10.408-2.573 1.42-.829 6.379 2.12 11.338 2.95 4.96 5.985 8.05 8.558 6.63 2.331-1.59 5.076-2.922 7.593-4.326 3.137 19.86 1.951 44.392 0 63.826.039 5.317 20.831 5.343 32.208 5.253 10.77-.086 32.186.002 32.227-5.315-1.952-19.434-3.133-43.966 0-63.826 2.518 1.404 5.263 2.735 7.593 4.325 2.573 1.42 5.611-1.67 8.558-6.63 2.949-4.959 4.691-9.918 2.12-11.337-12.714-7.976-25.762-8.13-39.664-10.409z"
            style={{
              fill: tShirtColor,
              fillOpacity: 1,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-157.269 -60.825)"
          />
        </svg>

        {/* MALE SHIRT ORNAMENTS */}

        <svg className='absolute scale-80'
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 103.475 93.211"
        >
          <defs>
            <linearGradient id="a">
              <stop
                offset={0}
                style={{
                  stopColor: "#000",
                  stopOpacity: .1,
                }}
              />
              <stop
                offset={1}
                style={{
                  stopColor: "#555",
                  stopOpacity: .7,
                }}
              />
            </linearGradient>
            <linearGradient
              xlinkHref="#a"
              id="b"
              x1={136.526}
              x2={138.39}
              y1={73.551}
              y2={71.188}
              gradientTransform="matrix(39.11037 0 0 39.11037 -5161.591 -2733.062)"
              gradientUnits="userSpaceOnUse"
            />
            <linearGradient
              xlinkHref="#a"
              id="e"
              x1={137.309}
              x2={137.047}
              y1={72.507}
              y2={70.91}
              gradientTransform="matrix(-39.11037 0 0 39.11037 5579.387 -2733.062)"
              gradientUnits="userSpaceOnUse"
            />
            <linearGradient
              xlinkHref="#a"
              id="c"
              x1={137.309}
              x2={137.047}
              y1={72.507}
              y2={70.91}
              gradientTransform="matrix(-39.11037 0 0 39.11037 5579.387 -2733.062)"
              gradientUnits="userSpaceOnUse"
            />
            <linearGradient
              xlinkHref="#a"
              id="d"
              x1={137.309}
              x2={137.047}
              y1={72.507}
              y2={70.91}
              gradientTransform="matrix(-39.11037 0 0 39.11037 5579.387 -2733.062)"
              gradientUnits="userSpaceOnUse"
            />
          </defs>
          <path //Silueta
            d="M219.806 60.825c-.079 0-.157.025-.157.059-1.74 2.76-7.526 2.689-10.655 2.72-3.129.032-8.914.102-10.656-2.658-.022-.035-.078-.058-.156-.058-12.382 2.171-28.884 3.49-39.664 10.408-2.573 1.42-.829 6.379 2.12 11.338 2.95 4.96 5.985 8.05 8.558 6.63 2.331-1.59 5.076-2.922 7.593-4.326 3.137 19.86 1.951 44.392 0 63.826.039 5.317 20.831 5.343 32.208 5.253 10.77-.086 32.186.002 32.227-5.315-1.952-19.434-3.133-43.966 0-63.826 2.518 1.404 5.263 2.735 7.593 4.325 2.573 1.42 5.611-1.67 8.558-6.63 2.949-4.959 4.691-9.918 2.12-11.337-12.714-7.976-25.762-8.13-39.664-10.409z"
            style={{
              fill: "url(#b)",
              fillOpacity: 1,
              stroke: '#fff',
              strokeWidth: .1,
              strokeOpacity: .1,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-157.269 -60.825)"
          />
          <path //Manga Derecha
            d="M258.008 71.537c-2.046.246-4.341 3.56-6.548 7.276h-.02c-2.644 4.45-4.478 8.75-2.163 10.024 2.311 1.274 5.161-2.017 7.801-6.467 2.64-4.45 4.434-9.317 2.124-10.59a2.27 2.27 0 0 0-.79-.243 1.936 1.936 0 0 0-.403 0z"
            style={{
              fill: "url(#c)",
              strokeWidth: .2,
              stroke: '#000',
              strokeOpacity: .5,
              strokeOpacity: .5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-157.269 -60.825)"
          />
          <path //Manga Izquierda
            d="M159.56 71.517c-.077 0-.117.014-.195.02a2.049 2.049 0 0 0-.79.242c-2.307 1.274-.516 6.14 2.124 10.59 2.648 4.451 5.49 7.742 7.801 6.468 2.316-1.274.481-5.574-2.163-10.024h-.02c-2.206-3.716-4.503-7.03-6.548-7.276-.078-.009-.157-.021-.235-.02z"
            style={{
              fill: "url(#d)",
              fillOpacity: 1,
              strokeWidth: .2,
              stroke: '#000',
              strokeOpacity: .5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-157.269 -60.825)"
          />
          <path //Cuello
            d="M198.163 61.169c-1.892 6.988 5.77 10.582 10.733 10.711 4.962-.129 12.625-3.723 10.732-10.711-1.295 2.536-6.389 2.783-10.732 2.85-4.343-.067-9.438-.314-10.733-2.85z"
            style={{
              fill: "url(#e)",
              fillOpacity: 1,
              strokeWidth: .2,
              stroke: '#000',
              strokeOpacity: .5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-157.269 -60.825)"
          />
        </svg>

      </main>

    }

  </div>


)
export default TShirts
