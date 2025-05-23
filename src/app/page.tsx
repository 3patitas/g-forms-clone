'use client'

import Header from "@/components/Header";
import { useState } from "react"

export default function Home() {
const [formContent, setFormContent] = useState([])

  return (
    <>
    <Header />
      <div className="container mx-auto px-4 h-screen">
        <div className="flex flex-col w-full space-y-2 my-4">
          <h1 className="text-2xl font-bold">Form Builder</h1>
          <h2 className="text-lg">Untitled Form</h2>
        </div>
        <div className="bg-white shadow-lg rounded-md p-5 my-10">
          {
            formContent.map((field, index) => {
              return (
                <div key={index}>
                  test
                </div>
              )
            })
          }
          <div className="relative w-full p-5">
            <div className="absolute inset-x-0 bottom-0 h-12 flex justify-center">
              <button className="inline-flex bg-gray-800 hover:bg-gray-700 items-center p-3 text-sm text-white rounded-md">Add Question</button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
