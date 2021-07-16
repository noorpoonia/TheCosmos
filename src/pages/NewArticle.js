import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/articles/NewArticleForm';

function NewArticlePage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://space-project-1615c-default-rtdb.firebaseio.com/space.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewArticlePage;
