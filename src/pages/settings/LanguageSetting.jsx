import NavBar from "../../components/Navbar";
import { useState } from "react";

const LanguageSetting = () => {
  const [languages, addLanguages] = useState([
    {
      key: "tigrinya",
      value: "Tigrinya",
    },
  ]);

  const addLanguagesHandler = (e) => {
    console.log(languages);
    return addLanguages(...languages, e.target.value);
  
  };

  return (
    <NavBar>
      <h1 className="text-center pb-20 text-2xl text-blue-900 font-semibold">
        Language setting
      </h1>
      <div className="flex">
        <div className="container  h-80 w-80 ">
          <div className="flex-col space-y-12 border border-gray-500 rounded-2xl p-10">
            <div className=" bg-white text-center">
              <span className="font-semibold text-blue-900">
                Insert Languages
              </span>
            </div>

            <div className="text-center">
              <input
                type="text"
                className="mx-auto border-2 border-blue-500 rounded-md
                    h-10 focus:border-green-500"
                placeholder="...Type here"
              />
            </div>

            <div className="text-center">
              <button
                className="bg-dark-purple text-white p-2
                     rounded-2xl"
                     onClick={addLanguagesHandler}
              >
                Add Language
              </button>
            </div>
          </div>
        </div>

        <div className="container  h-80 w-80 mx-36">
          <div className="flex-col">
            <div className=" bg-white text-center">
              <span className="font-semibold text-blue-900">
                List of Languages
              </span>
            </div>
            <div className="mt-5 p-5">
              <ul>
                {languages.map((language) => {
                  return (
                    <li key={language.key}>
                      {language.value} <span>Language</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default LanguageSetting;
