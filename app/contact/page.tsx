"use client";

export default function Contact() {
    console.log('Is this is a server or client component?')
    return (
        <div>
            <button onClick={ () => alert('Hello')}>
                Click Me
            </button>
        </div>
    )
}