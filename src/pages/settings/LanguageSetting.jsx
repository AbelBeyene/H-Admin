import React, { useState } from "react";
import NavBar from "../../components/Navbar";

const LanguageSetting = () => {
  const [languages, setLanguages] = useState([
    {
      key: "tigrinya",
      value: "Tigrinya",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addLanguagesHandler = (e) => {
    e.preventDefault();
    const newLanguage = {
      key: inputValue.toLowerCase(), 
      value: inputValue,
    };
    setLanguages([...languages, newLanguage]);
    setInputValue(""); 
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const deleteLanguage = (key) => {
    setLanguages(languages.filter((language) => language.key !== key));
  };

  return (
    <NavBar>
      <h1 className="text-center pb-20 text-2xl text-blue-900 font-semibold">
        Language setting
      </h1>
      <div className="flex">
        <div className="container h-80 w-80">
          <div className="flex-col space-y-12 border border-gray-500 rounded-2xl p-10">
            <div className="bg-white text-center">
              <span className="font-semibold text-blue-900">
                Insert Languages
              </span>
            </div>

            <div className="text-center">
              <form onSubmit={addLanguagesHandler}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="mx-auto border-2 border-blue-500 rounded-md h-10 focus:border-green-500"
                  placeholder="...Type here"
                />
                <button type="submit" className="bg-dark-purple mt-6 text-white p-2 rounded-2xl">
                  Add Language
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container h-80 w-80 mx-36">
          <div className="flex-col">
            <div className="bg-white text-center">
              <span className="font-semibold text-blue-900">
                List of Languages
              </span>
            </div>
            <div className="mt-5 p-5 flex-col space-y-12 border border-gray-500 rounded-2xl p-10">
              <ul>
                {languages.map((language, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{language.value}</span>
                    <button
                      onClick={() => deleteLanguage(language.key)}
                      className="bg-red-500 text-white px-2 text-sm  rounded-2xl"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default LanguageSetting;
