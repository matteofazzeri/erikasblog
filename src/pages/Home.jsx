import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

function LatestPosts() {}

const Home = () => {
  return (
    <section className="w-screen min-h-screen bg-red-200 relative overflow-auto">
      <header className="w-full h-[15vh] bg-white flex flex-col items-center justify-center gap-0 m-0 p-0">
        <div className="flex flex-col items-center">
          <Typography variant="h1">Erika's Blog</Typography>
          <Typography variant="lead">Welcome to my brain</Typography>
        </div>
      </header>
      <nav className="w-full h-[5vh] bg-black/10 flex justify-center items-center sticky top-0">
        <ul className="flex flex-row gap-12">
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
        </ul>
      </nav>
      <section className="w-full max-h-[calc(100vh-15vh-5vh)] flex flex-row p-4 ">
        <div className="w-[70%] h-screen bg-white">
          <Typography variant="lead">
            qui ci saranno i post più recenti. Per rendere l'idea
          </Typography>
          <Card className=" w-full p-4">
            <div className="w-full h-min flex justify-center bg-black">
              <CardHeader floated={false} className=" h-fit w-fit">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
            </div>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
          <Card className=" w-full p-4">
            <div className="w-full h-min flex justify-center bg-black">
              <CardHeader floated={false} className=" h-fit w-fit">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
            </div>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
          <Card className=" w-full p-4">
            <div className="w-full h-min flex justify-center bg-black">
              <CardHeader floated={false} className=" h-fit w-fit">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
            </div>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Typography variant="lead">qui qualcosa, vedremo</Typography>
        </div>
      </section>
    </section>
  );
};

export default Home;
