import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchList from 'components/MovieSearchList/MovieSearchList';
import { Form, Button, Input } from './MovieSearch.styled';

export default function MovieSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';
  const [input, setInput] = useState(() => movieQuery);
  const [inputForFetch, setInputForFetch] = useState(() => movieQuery);

  const handleInputClick = () => {
    setInput('');
    setInputForFetch('');
    setSearchParams({});
  };
  const handleSubmitForm = event => {
    event.preventDefault();
    const normalizedInput = input.trim().toLowerCase();
    if (!normalizedInput.length) {
      console.log('Your query is incorrect');
      setInput('');
      return;
    }
    setInputForFetch(normalizedInput);
    setSearchParams(`query=${normalizedInput}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onClick={handleInputClick}
        />
        <Button type="submit" name="button">
          Search
        </Button>
      </Form>
      {inputForFetch && <MovieSearchList query={inputForFetch} />}
    </>
  );
}
