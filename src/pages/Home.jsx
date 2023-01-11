import React, { useEffect, useState } from "react";

const Home = () => {
  const [mainJoke, setMainJoke] = useState(null);
  const [numberAllJokes, setNumberAllJokes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getJoke = async () => {
    try {
      const res = await fetch(
        "https://jokesbapak2.reinaldyrafli.com/api/today"
      );
      if (!res.ok) throw new Error("Something went wrong");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setLoading(true);
      setMainJoke(url);
    } catch (error) {
      setError(error);
    }
  };

  const getRandomJoke = async () => {
    try {
      const res = await fetch("https://jokesbapak2.reinaldyrafli.com/api/");
      if (!res.ok) throw new Error("Something went wrong");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setLoading(true);
      setMainJoke(url);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const getNumberOfJokes = async () => {
    try {
      const res = await fetch(
        "https://jokesbapak2.reinaldyrafli.com/api/total"
      );
      const data = await res.json();
      setNumberAllJokes(data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJoke();
    getNumberOfJokes();
  }, []);

  return (
    <main className="flex flex-col">
      <h1 className="text-4xl">
        Harimu Membosankan? <br /> Mari ceria bersamaku
      </h1>
      <p className="text-2xl mt-5">
        Lebih dari {numberAllJokes} jokes <br /> yang siap menghiburmu, iya kamu
      </p>
      {loading ? (
        <img
          src={mainJoke}
          className="max-w-[300px] rounded-md my-7"
          alt="main-joke"
        />
      ) : (
        <div className="animate-pulse">
          <div className="h-80 w-80 bg-[#1F2937] rounded-md my-5 text-center flex flex-col justify-center">
            Loading ...{" "}
          </div>
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit"
        onClick={getRandomJoke}
      >
        Ganti Joke
      </button>
    </main>
  );
};

export default Home;
