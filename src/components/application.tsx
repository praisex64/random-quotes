import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [count, setCount] = useState(10); 

  // useEffect(() => {
  //   fetchRandomQuote().then(setQuotes); 
   
  // },[])

  if (!quotes) return <Loading />;
  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
     {/* <InspirationalQuote content={quote.content} source={quote.source} />  */}
       <Quotes count={count} onSubmit={() => fetchQuotes(count).then(setQuotes)}>

        {quotes.map((quote) => {
           return (
            <InspirationalQuote 
             content={quote.content}
             source={quote.source}
            />
           )
        })}
         
     
      </Quotes> 
    </main>
  );
};

export default Application;
