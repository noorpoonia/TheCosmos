import { useState, useEffect } from 'react';

import MeetupList from '../components/articles/ArticleList';
import classes from './Favorite.module.css';

function AllArticlesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://space-project-1615c-default-rtdb.firebaseio.com/space.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.paragraph}>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Space Articles</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllArticlesPage;
