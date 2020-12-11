import React, { useState } from 'react';

import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
} from 'grommet';

import Layout from '../components/layout';


const ControlledInput = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [ampm, setAmpm] = useState('');
  const [size, setSize] = useState('');
  const [comments, setComments] = useState('');
  const [age, setAge] = useState('');

  return (
    <Layout>
      <Box width="medium">
        <Form
          onChange={value => console.log('Change', value)}

          onReset={() => {
            setName('');
            setEmail('');
            setSubscribe(false);
            setAmpm('');
            setSize('');
            setComments('');
            setAge('');
          }}

          onSubmit={event =>
            console.log('Submit', event.value, event.touched)
          }
        >
          <FormField 
            label="Name"
            name="name" value={name} 
            onChange={event => setName(event.target.value)} 
            required 
          />

          <FormField 
            label="Email" 
            name="email"
            mask={[
              { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
              { fixed: '@' },
              { regexp: /^[\w]+$/, placeholder: 'my' },
              { fixed: '.' },
              { regexp: /^[\w]+$/, placeholder: 'com' },
            ]}
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <FormField 
            name="subscribe" 
            component={CheckBox} 
            label="Subscribe?"
            checked={subscribe}
            onChange={event => setSubscribe(event.target.checked)}
          />

          <FormField 
            name="ampm" 
            component={RadioButtonGroup}
            options={['morning', 'evening']}
            value={ampm}
            onChange={event => setAmpm(event.target.value)}
          />

          <FormField 
            label="Size" 
            name="size" 
            component={Select} 
            options={['small', 'medium', 'large']}
            value={size}
            onChange={event => setSize(event.option)}
          />

          <FormField 
            label="Comments" 
            name="comments" 
            component={TextArea} 
            value={comments}
            onChange={event => setComments(event.target.value)}          
          />

          <FormField 
            label="Age" 
            name="age" 
            component={RangeInput} 
            min={15}
            max={75}
            value={age}
            onChange={event => setAge(event.target.value)}
            pad
          />

          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </Layout>
  )
};

export default ControlledInput;




