import {Products} from "@/components/products";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col">
      <Title />
      <div className="flex  flex-1 items-center justify-center  bg-blue-200">
        <Products />
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="my-10 ">
      <h1 className="mb-5 text-5xl font-semibold tracking-tighter">
        Saving state in URL
      </h1>
      <p className="text-base">
        This is a simple example of how to save state in the URL using Next.js.
      </p>
    </div>
  );
}
