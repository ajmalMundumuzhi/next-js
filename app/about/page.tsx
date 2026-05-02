import ButtonComponent from "./button";

export default async function About () {
    console.log("Is this is a server or client component?")
    
    const response = await fetch("https://jsonplaceholder.typicode.com");
    const posts = response.json();
    console.log(posts);

    return (
        <ButtonComponent />
    )
}