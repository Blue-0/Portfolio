interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;

    case "small":
      sizeLogo = 61;
      break;
    case "medium":
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }

  return (
    <div style={{ width: `${sizeLogo}px`, height: `${sizeLogo}px` }}>
      <svg
      width={sizeLogo}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 1000 1000"
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="b">
            <path d="M0 706.128h706.128V0H0Z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="c">
            <path d="M332.236 465.945a3.988 3.988 0 0 1-3.988-3.988v-18.024a3.989 3.989 0 0 1 3.988-3.988h9.012c36.285 0 55.379-8.928 65.009-16.418 23.285-18.11 32.635-37.697 34.945-43.269l3.454-8.325a3.986 3.986 0 0 1 5.211-2.155l16.65 6.905a3.987 3.987 0 0 1 2.155 5.211l-3.452 8.325c-3.754 9.049-15.457 32.409-43 53.831-18.416 14.324-46.416 21.895-80.972 21.895z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="d">
            <path d="M0 706.128h706.128V0H0Z" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="e">
            <path d="m444.656 324.562-3.454-8.325c-2.31-5.571-11.66-25.158-34.945-43.269-9.63-7.49-28.724-16.418-65.009-16.418h-9.012a3.988 3.988 0 0 1-3.988-3.988v-18.024a3.989 3.989 0 0 1 3.988-3.988h9.012c34.556 0 62.556 7.572 80.972 21.895 27.543 21.422 39.246 44.783 43 53.831l3.452 8.325a3.987 3.987 0 0 1-2.155 5.211l-16.65 6.906a3.988 3.988 0 0 1-5.211-2.156" />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="f">
            <path d="M0 706.128h706.128V0H0Z" />
          </clipPath>
          <linearGradient
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-90 529.596 176.532) scale(706.12842)"
            spreadMethod="pad"
            id="a"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#204057" }}
              offset="0"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#153041" }}
              offset="1"
            />
          </linearGradient>
        </defs>
        <path
          d="M167.963 706.128C75.584 706.128 0 630.545 0 538.165V167.963C0 75.584 75.584 0 167.963 0h370.202c92.38 0 167.963 75.584 167.963 167.963v370.202c0 92.38-75.583 167.963-167.963 167.963z"
          style={{ fill: "url(#a)", stroke: "none" }}
          transform="matrix(1.33333 0 0 -1.33333 0 941.504)"
        />
        <g
          clipPath="url(#b)"
          transform="matrix(1.33333 0 0 -1.33333 0 941.504)"
        >
          <path
            d="M0 0c-33.903 0-65.879 13.305-90.037 37.463S-127.5 93.597-127.5 127.5v318c0 33.903 13.305 65.879 37.463 90.037S-33.903 573 0 573h326c33.903 0 65.879-13.305 90.037-37.463S453.5 479.403 453.5 445.5v-318c0-33.903-13.305-65.879-37.463-90.037S359.903 0 326 0Z"
            style={{
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(190.064 67.005)"
          />
          <path
            d="M0 0h-326c-76.45 0-139-62.55-139-139v-318c0-76.45 62.55-139 139-139H0c76.45 0 139 62.55 139 139v318C139-62.55 76.45 0 0 0m0-23c30.831 0 59.919-12.108 81.905-34.095C103.892-79.081 116-108.169 116-139v-318c0-30.831-12.108-59.919-34.095-81.905C59.919-560.892 30.831-573 0-573h-326c-30.831 0-59.919 12.108-81.905 34.095C-429.892-516.919-442-487.831-442-457v318c0 30.831 12.108 59.919 34.095 81.905C-385.919-35.108-356.831-23-326-23Z"
            style={{
              fill: "#102734",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(516.064 651.505)"
          />
          <path
            d="M0 0h-133.5c-6.05 0-11-4.95-11-11v-259c0-6.05 4.95-11 11-11H0c77.275 0 140.5 63.225 140.5 140.5S77.275 0 0 0m0-71c18.409 0 35.819-7.272 49.023-20.476C62.228-104.681 69.5-122.091 69.5-140.5c0-18.409-7.272-35.819-20.477-49.024C35.819-202.728 18.409-210 0-210h-73.5v139z"
            style={{
              fill: "#1b3648",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(352.564 489.505)"
          />
          <path
            d="M0 0h-62.42a4.65 4.65 0 0 0-4.65 4.656v129.691a4.65 4.65 0 0 0 4.65 4.656H0a4.657 4.657 0 0 1-4.65-4.656V4.656A4.657 4.657 0 0 1 0 0"
            style={{
              fill: "#1b3648",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(322.775 279.502)"
          />
          <path
            d="M0 0h-78.275a4.14 4.14 0 0 0-4.129 4.128v17.744A4.14 4.14 0 0 0-78.275 26H0a4.14 4.14 0 0 0 4.128-4.128V4.128A4.14 4.14 0 0 0 0 0"
            style={{
              fill: "#30a4e1",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(312.679 439.945)"
          />
          <path
            d="M0 0h-78.275a4.14 4.14 0 0 0-4.129 4.128v17.744A4.14 4.14 0 0 0-78.275 26H0a4.14 4.14 0 0 0 4.128-4.128V4.128A4.14 4.14 0 0 0 0 0"
            style={{
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(312.679 230.55)"
          />
          <path
            d="M0 0h-56.147a4.14 4.14 0 0 0-4.128 4.128v15.523a4.14 4.14 0 0 0 4.128 4.129H0a4.14 4.14 0 0 0 4.128-4.129V4.128A4.14 4.14 0 0 0 0 0"
            style={{
              fill: "#fc791f",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(290.55 336.358)"
          />
          <path
            d="M0 0h-15.523a4.14 4.14 0 0 1-4.128-4.128v-15.523a4.14 4.14 0 0 1 4.128-4.129H0a4.141 4.141 0 0 1 4.129 4.129v15.523A4.14 4.14 0 0 1 0 0"
            style={{
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(465.266 360.137)"
          />
          <path
            d="M0 0h-56.147a4.14 4.14 0 0 0-4.128 4.128v15.523a4.14 4.14 0 0 0 4.128 4.129H0a4.14 4.14 0 0 0 4.128-4.129V4.128A4.14 4.14 0 0 0 0 0"
            style={{
              fill: "#30a4e1",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(290.55 284.34)"
          />
          <path
            d="M0 0h-56.147a4.14 4.14 0 0 0-4.128 4.128v15.523a4.14 4.14 0 0 0 4.128 4.129H0a4.14 4.14 0 0 0 4.128-4.129V4.128A4.14 4.14 0 0 0 0 0"
            style={{
              fill: "#fc791f",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(290.55 388.376)"
          />
          <path
            d="M0 0a3.987 3.987 0 0 0-5.211 2.156l-3.453 8.325c-2.311 5.571-11.661 25.158-34.945 43.269-9.63 7.489-28.725 16.418-65.01 16.418h-9.012a3.987 3.987 0 0 0-3.988 3.987V92.18a3.988 3.988 0 0 0 3.988 3.988h9.012c34.557 0 62.556-7.572 80.972-21.895 27.543-21.422 39.246-44.783 43-53.832l3.452-8.324a3.988 3.988 0 0 0-2.156-5.212Z"
            style={{
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(449.867 369.777)"
          />
        </g>
        <g
          clipPath="url(#c)"
          transform="matrix(1.33333 0 0 -1.33333 0 941.504)"
        >
          <path
            d="m0 0 89.97-49.463L67.221-95.99l-33.125-50.249-89.97 49.463Z"
            style={{
              fill: "#30a4e1",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(354.999 540.04)"
          />
        </g>
        <g
          clipPath="url(#d)"
          transform="matrix(1.33333 0 0 -1.33333 0 941.504)"
        >
          <path
            d="M0 0a3.987 3.987 0 0 1-5.211-2.156l-3.453-8.325c-2.311-5.571-11.661-25.158-34.945-43.269-9.63-7.489-28.725-16.418-65.01-16.418h-9.012a3.987 3.987 0 0 1-3.988-3.987V-92.18a3.988 3.988 0 0 1 3.988-3.988h9.012c34.557 0 62.556 7.572 80.972 21.895 27.543 21.422 39.246 44.783 43 53.832l3.452 8.324a3.988 3.988 0 0 1-2.156 5.212z"
            style={{
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(449.867 326.718)"
          />
        </g>
        <g
          clipPath="url(#e)"
          transform="matrix(1.33333 0 0 -1.33333 0 941.504)"
        >
          <path
            d="m0 0 89.97 49.463L67.221 95.99l-33.125 50.249-89.97-49.463Z"
            style={{
              fill: "#fc791f",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(354.999 156.455)"
          />
        </g>
        <g
          clipPath="url(#f)"
          transform="matrix(1.33333 0 0 -1.33333 0 941.504)"
        >
          <path
            d="M0 0c-10.803 0-19.592 8.789-19.592 19.592 0 10.803 8.789 19.592 19.592 19.592 10.803 0 19.592-8.789 19.592-19.592C19.592 8.789 10.803 0 0 0"
            style={{
              fill: "#fc791f",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(536.62 517.47)"
          />
          <path
            d="M0 0c-14.41 0-26.092-11.682-26.092-26.092 0-14.41 11.682-26.091 26.092-26.091 14.41 0 26.092 11.681 26.092 26.091C26.092-11.682 14.41 0 0 0m0-13c7.219 0 13.092-5.873 13.092-13.092S7.219-39.183 0-39.183s-13.092 5.872-13.092 13.091C-13.092-18.873-7.219-13 0-13"
            style={{
              fill: "#214158",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(536.62 563.153)"
          />
          <path
            d="M0 0c-10.803 0-19.592 8.789-19.592 19.592 0 10.803 8.789 19.592 19.592 19.592 10.803 0 19.592-8.789 19.592-19.592C19.592 8.789 10.803 0 0 0"
            style={{
              fill: "#30a4e1",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(536.62 150.356)"
          />
          <path
            d="M0 0c-14.41 0-26.092-11.682-26.092-26.092 0-14.41 11.682-26.092 26.092-26.092 14.41 0 26.092 11.682 26.092 26.092C26.092-11.682 14.41 0 0 0m0-13c7.219 0 13.092-5.873 13.092-13.092S7.219-39.184 0-39.184s-13.092 5.873-13.092 13.092S-7.219-13 0-13"
            style={{
              fill: "#214158",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(536.62 196.04)"
          />
          <path
            d="M0 0c0 7.643-6.196 13.839-13.839 13.839-7.644 0-13.84-6.196-13.84-13.839 0-7.643 6.196-13.839 13.84-13.839C-6.196-13.839 0-7.643 0 0"
            style={{
              fill: "#fc791f",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(183.347 169.948)"
          />
          <path
            d="M0 0c0 7.528-6.102 13.63-13.63 13.63-7.528 0-13.63-6.102-13.63-13.63 0-7.528 6.102-13.63 13.63-13.63C-6.102-13.63 0-7.528 0 0"
            style={{
              fill: "#30a4e1",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            transform="translate(183.138 537.061)"
          />
        </g>
      </svg>
    </div>
  );
};
