"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Oh no&#33; Something went wrong on that page&#33; </h2>
        <p>{error.message}</p>
        {/* <button onClick={() => reset()}>Try again</button> */}
      </body>
    </html>
  );
}
