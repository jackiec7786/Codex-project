"use client";
export default function Error({ reset }: { error: Error; reset: ()=>void }){return <div><p>Something went wrong.</p><button onClick={reset}>Retry</button></div>}
