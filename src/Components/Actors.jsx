import React, { useState, useEffect } from "react";

function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  } 
  // else {
  //   dataUrl = `https://api.tvmaze.com/search/people?q=friends`;
  // }

  const getActorsData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActorsData();
  }, [inputVal]);
  // console.log(actorsData);
  return (
    <>
      <div className="searchbox">
             <input
               id="inputbox"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Search by Actors name...."
              />
        </div>
          <div className="actors">
          <div className="showdata2">
            {
              actorsData.map((element) => {
              return (
                <div >
                  <div className="">
                    <a href={element.person.url} target="_aayush">
                    {element.person.image ? (
                      <img
                        src={element.person.image.medium}
                        className=""
                        // style={{ width: "255px", height: "325px" }}
                        alt={
                          element.person.name != null
                            ? element.person.name
                            : "Not found"
                        }
                      />
                    ) : (
                      <div className="">
                        <img
                          src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                          alt = "Not Found"
                        />
                      </div>
                    )}
                    </a>
                    <h5 className="">
                      {element.person.name}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>       
    </>
  );
}

export default Actor;
