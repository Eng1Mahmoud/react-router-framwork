import type { Route } from "./+types/home";

// add meta information for the route
export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router v7" },
    { name: "description", content: "Welcome to React Router!" },
   
    
  ];
}

export default function Home() {
  return(
    <div>
      <h1>Welcome to React Router!</h1>
      <p>
        This is a new React Router app. You can start building your application
        from here.
      </p>
    </div>
  )
}
