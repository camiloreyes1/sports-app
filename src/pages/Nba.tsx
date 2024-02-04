import axios from "axios";
import { useState, useEffect } from "react";

interface NbaProps {
  name: string;
}

const Nba: React.FC<NbaProps> = ({ name }) => {
  const [response, setResponse] = useState(null);

  const fetchNbaLive = async () => {
    try {
      const res = await axios.get('https://api-nba-v1.p.rapidapi.com/games', {
        headers: {
          'X-RapidAPI-Key': process.env.API_NBA_KEY,
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        },
        params: { q: `${name}` },
      });

      setResponse(res.data);
      console.log(res.data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log("Teams ==>", name)
    fetchNbaLive()
  }, [name]);

  return (
    <div>
        
    </div>
  );
}

export default Nba;
