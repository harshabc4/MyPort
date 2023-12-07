import { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface BoxProps { }
interface Feed {
   _id: string;
   text: string;
   __v: number;
 }

const Box: FC<BoxProps> = () => {
   const [feeds, setFeedsData] = useState<Feed | null>(null);
   useEffect(() => {
      const fetchData = async () => {
         try {
            console.log(import.meta.env.PROD)
            // if(process.env = )
            if(import.meta.env.DEV)
            {
            var endpoint = "/api/getPosts";
            }
            else 
            {
               var endpoint = "/getPosts";
            }
            console.log(endpoint);
            // console.log(endpoint);
            const response = await axios
               // .get("/showMaterials")
               // .get("/getPosts")
               .get<Feed>(endpoint)
               // .then((res) => setFeedsData(res))
               .then((res) => {
                  console.log(res.data);
                  // console.log("this is materials from appjs frontend socialmedia");
                  // return res.data;
                  setFeedsData(res.data);
               });
               console.log(response);
            // console.log(response);
         } catch (err) {
            console.error(err);
         }
      };
      fetchData();
   }, []);
   return (
      <div>
         <div>adsf</div>
         {feeds ? (
        feeds.text) : (
        <div>No data available</div>
      )}
      </div>
   );
};

export default Box;
