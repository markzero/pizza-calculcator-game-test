import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import NumberPicker from './components/NumberPicker';
import Title from './components/Title';
import Content from './components/Content';
import SelectBox from './components/SelectBox';

function App({ history }) {
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(80);
  const [bodyType, setBodyType] = useState('Average');

  return (
    <React.Fragment>
      <Title>How many pizzas can you eat?</Title>
      <Content>
        <form method="POST" onSubmit={e => {
          e.preventDefault();
          history.push({
            pathname: '/result',
            state: { age, height, weight, bodyType },
          });
        }}>
          <NumberPicker
            forId="age"
            title="Your age?"
            min={5}
            max={105}
            value={age}
            onChange={setAge}
          />
          <NumberPicker
            forId="height"
            title="Your height?"
            min={80}
            max={220}
            value={height}
            onChange={setHeight}
          />
          <NumberPicker
            forId="weight"
            title="Your weight?"
            min={40}
            max={260}
            value={weight}
            onChange={setWeight}
          />
          <SelectBox
            forId="weight"
            title="Your weight?"
            options={['Average', 'Fat', 'Skinny']}
            value={bodyType}
            onChange={setBodyType}
          />
          <div className="flex justify-end">
            <input
              type="submit"
              value="Submit"
              className="p-4"
            />
          </div>
        </form>
      </Content>
    </React.Fragment>
  );
}

export default withRouter(App);
