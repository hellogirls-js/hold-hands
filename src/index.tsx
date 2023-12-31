import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TweetPage from './page-components/TweetPage';
import Index from './page-components/Index';
import QuoteRetweetsPage from './page-components/QuoteRetweetsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: ":username/status/:tweet_id",
        element: <TweetPage />
      },
      {
        path: ":username/status/:tweet_id/retweets/with_comments",
        element: <QuoteRetweetsPage />
      },
      {
        path: "*",
        element: <h1>404: Not found</h1>
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
