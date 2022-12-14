import Head from "next/head";
import React from "react";
import SearchCategory from "../components/SearchCategory";
import SelectCard from "../components/SelectCard";

const selectcategory = () => {
  return (
    <>
      <Head>
        <title>MEET-IN : SELECT CATEGORY</title>
        <meta
          name="description"
          content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="w-full h-screen bg-slate-100 dark:bg-slate-600 ">
        <div className="text-4xl text-center pt-20 text-green-500 select-none dark:text-green-200">
          Select Category
        </div>

        <p className=" text-lg text-center pt-2 text-green-400 select-none dark:text-green-300">
          Select the category from the given categories from below which you
          will teach by this account.<br/>You can choose only one category from one account.
        </p>
        <SearchCategory/>
        <SelectCard />
      </div>
    </>
  );
};

export default selectcategory;
