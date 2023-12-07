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
         // try {
         //    console.log(import.meta.env.PROD)
            // var endpoint = "http://localhost:2121/getPosts";
            var endpoint = "/getPosts";
         //    console.log(endpoint);
         //    const response = await axios
         //       .get<Feed>(endpoint)
         //       .then((res) => {
         //          console.log(res.data);
         //          setFeedsData(res.data);
         //       });
         //       console.log(response);
         //    // console.log(response);
         // } 
         try {
            // ... (existing code)
      
            const response = await axios.get<Feed>(endpoint);
            console.log(response.data);
            setFeedsData(response.data);
         }
         catch (err) {
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
