import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          assumenda totam facere tempore id, repellat, ipsam qui consectetur sed
          adipisci obcaecati atque. Suscipit quibusdam vero porro cumque officia
          mollitia consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          assumenda totam facere tempore id, repellat, ipsam qui consectetur sed
          adipisci obcaecati atque. Suscipit quibusdam vero porro cumque officia
          mollitia consectetur.
        </p>
      </article>
    </section>
  );
}

export default App;
